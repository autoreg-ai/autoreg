// Tag and push a release from the version currently in package.json.
//
// This repo's version is not bumped here — it's synced in from autoreg-agent
// (see autoreg-agent/scripts/update-docs.js, which writes package.json's
// sibling `public/version.json`). This script just tags whatever version is
// already committed and pushes the tag, triggering release.yml.
//
// Usage: npm run release   (from autoreg, on main, with a clean tree)

const { execFileSync } = require('node:child_process');

const { version } = require('../package.json');
const tag = `v${version}`;

function git(args) {
  return execFileSync('git', args, { encoding: 'utf8' }).trim();
}

const branch = git(['rev-parse', '--abbrev-ref', 'HEAD']);
if (branch !== 'main') {
  console.error(`::error::Must release from main (currently on ${branch}).`);
  process.exit(1);
}

const status = git(['status', '--porcelain']);
if (status) {
  console.error('::error::Working tree is not clean. Commit or stash changes before releasing.');
  process.exit(1);
}

let existingTags = '';
try {
  existingTags = git(['ls-remote', '--tags', 'origin', tag]);
} catch {
  existingTags = '';
}
if (existingTags) {
  console.error(`::error::Tag ${tag} already exists on origin. Bump the version upstream in autoreg-agent first.`);
  process.exit(1);
}

git(['tag', tag]);
git(['push', 'origin', tag]);
console.log(`Tagged and pushed ${tag}`);
