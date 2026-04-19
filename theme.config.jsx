export default {
  logo: <span>Autoreg Docs</span>,
  project: {
    link: 'https://github.com/your-org/autoreg'
  },
  docsRepositoryBase: 'https://github.com/your-org/autoreg/tree/main',
  footer: {
    text: `MIT ${new Date().getFullYear()} © Autoreg`
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Autoreg Docs'
    }
  }
}
