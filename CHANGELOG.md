# Changelog

## v0.3.34 - 2026-07-14

- fix: enhance device tracking by adding public IP handling and improving device recording logic (a126ab7)
- fix: update auto-organize tool to modify the project's single plan file and improve JSON handling in Markdown rendering (bac026f)

## v0.3.33 - 2026-07-13

- fix: refactor MCP CLI path resolution to use resolvePackagedAtPlaywrightPath for consistency (cda1344)

## v0.3.32 - 2026-07-13

- fix: remove unnecessary environment variable and ensure browser preparation step is included for Windows and macOS builds (a8a504b)

## v0.3.31 - 2026-07-12

- 0.3.30 (abb2f5b)
- fix: revert version number to 0.3.29 in package.json (d647775)
- 0.3.30 (411919e)
- feat: enhance OpenAI integration with improved error handling and message structure refactor: streamline spec context packing and scenario message generation fix: update App component to reference autoreg spec from disk instead of embedding (6efd151)
- Test generation logic fixes (5c3d7fb)
- package.json updated with correct version (06a5dba)
- log correction (f36789f)
- feat: add update-docs command to sync changelog and version to docs project (c75ab68)

## v0.3.30 - 2026-07-12

- fix: revert version number to 0.3.29 in package.json (d647775)
- 0.3.30 (411919e)
- feat: enhance OpenAI integration with improved error handling and message structure refactor: streamline spec context packing and scenario message generation fix: update App component to reference autoreg spec from disk instead of embedding (6efd151)
- Test generation logic fixes (5c3d7fb)
- package.json updated with correct version (06a5dba)
- log correction (f36789f)
- feat: add update-docs command to sync changelog and version to docs project (c75ab68)

## v0.3.30 - 2026-07-12

- feat: enhance OpenAI integration with improved error handling and message structure refactor: streamline spec context packing and scenario message generation fix: update App component to reference autoreg spec from disk instead of embedding (6efd151)
- Test generation logic fixes (5c3d7fb)
- package.json updated with correct version (06a5dba)
- log correction (f36789f)
- feat: add update-docs command to sync changelog and version to docs project (c75ab68)

# Changelog

## v0.3.30 - 2026-07-10

- No changes recorded

## v0.3.29 - 2026-07-10

- Merge pull request #8 from autoreg-ai/SIT-1 (9166ef7)
- feat: add missing appx manifest assets for Windows build support (b0f6850)
- feat: enhance scenario generation with authored steps and spec context packing (1eb800c)

## v0.3.28 - 2026-07-10

- feat: update external link for upgrade pricing in CreditChip component (7c2e409)
- feat: refactor cloud logger initialization and enhance device ID handling (46b191e)
- feat: refactor environment handling and improve default environment name derivation (7b99edc)

## v0.3.27 - 2026-07-10

- feat: add external link for generating specifications in New Project Dialog (6e87cf8)

## v0.3.26 - 2026-07-08

- feat: update Microsoft Store package identity and improve Edge browser handling in Playwright executor (65cbe65)

## v0.3.25 - 2026-07-08

- feat: update Microsoft Store packaging to use .appx format and improve upload process (bdcf9f4)

## v0.3.24 - 2026-07-08

- feat: add Microsoft Store packaging and improve Playwright browser readiness checks (5cc601e)

## v0.3.23 - 2026-07-08

- feat: enhance Playwright browser provisioning and management (337692b)
- feat: Implement Playwright browser provisioning and OAuth enhancements (223fadd)

## v0.3.22 - 2026-07-06

- feat: implement device tracking and registration for signed-in users (fd0648f)
- feat: add test parameter environments management (6c21747)
- feat: propagate and display OAuth provider errors in the login UI (aa2e56d)
- refactor: update cloud verification to use CF_PROXY_URL and enhance logging for verification processes (306f09e)
- fix: update pinned public key for spec verification (c1d5a60)
- refactor: remove unused MCP client placeholder and clean up selector validation logic (628bf34)
- refactor: remove unused MCP client placeholder and related components; simplify test plan generation instructions (a7e0662)
- docs: rewrite project documentation to reflect new Electron-based architecture, updated build scripts, and proprietary licensing (1a1dc86)
- feat: implement cryptographic verification for autoreg.md files to detect tampered or forged specifications during project import. (442e2d3)
- feat: add dismiss buttons to error and canceled state notifications in AutoRegThread (6db08b5)
- feat: enhance report export functionality and add insights feature (5d8d690)

## v0.3.21 - 2026-07-03

- feat: implement drag-and-drop functionality for scenario reordering in plans (9a4d97a)
- ci: remove S3 CORS workflow (4883a11)
- ci: add workflow to apply CORS policy to binaries bucket (6da95f9)

## v0.3.20 - 2026-07-03

- fix: improve DMG build reliability by disabling Spotlight and XProtect during packaging refactor: remove local IP retrieval from machine info telemetry (9528caa)

## v0.3.19 - 2026-07-03

- feat: add machine info telemetry and record device on user during authentication (44ef43b)
- feat: upload release manifest to stable S3 URL for client access (aed2187)

## v0.3.18 - 2026-07-03

- fix: disable Spotlight indexing to prevent flaky hdiutil detach during macOS build (d544b46)

## v0.3.17 - 2026-07-03

- chore: update AutoReg icon asset (3e7f08b)

## v0.3.16 - 2026-07-03

- refactor: streamline S3 upload process and update release manifest generation (c2bbb10)

## v0.3.15 - 2026-07-03

- Merge pull request #7 from autoreg-ai/SIT (a5506c6)
- Merge branch 'main' into SIT (0c3212c)
- 0.3.7 (0348e09)
- feat: add AWS S3 upload for release binaries and manifest generation (87c8d07)
- feat: add dark mode support with new logo and patch dangling tool calls in chat graph (a98cb12)
- feat: enhance ScenarioPreview with relative time and duration formatting, add keyboard navigation, and improve UI feedback (5f7351b)
- feat: add model selector and action bar for message interactions (d666c17)
- Refactor plan management and scenario handling (72c9a89)
- feat: implement ask_user_question tool and integrate approval prompt in UI (18ac481)

# Changelog

## v0.3.14 - 2026-07-02

- No changes recorded

## v0.3.13 - 2026-07-01

- ci: upload Windows/macOS installers to S3 as a public download CDN (09f3c8f)
- ci: remove publish-to-docs-repo job from release workflow (f3a756c)

## v0.3.12 - 2026-07-01

- ci: publish changelog/version to autoreg-ai/autoreg, drop binary hosting (09a26ed)
- ci: disable broken publish-to-docs-repo job (982f4d4)

## v0.3.11 - 2026-07-01

- feat: add changelog update script and modify release workflow to include changelog (350bbae)
- ci: fix release version step and stop publishing GitHub Releases to autoreg (fde4ca2)

## v0.3.10 - 2026-07-01

- ci: fix release version step and stop publishing GitHub Releases to autoreg (fde4ca2)

