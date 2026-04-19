import nextra from 'nextra'

const withNextra = nextra({
  contentDirBasePath: '/',
  latex: true,
  search: {
    codeblocks: false
  }
})

export default withNextra({
  output: 'standalone'
})
