export default {
  logo: <strong>Autoreg Docs</strong>,
  project: {
    link: 'https://github.com/autoreg-ai/autoreg-docs'
  },
  docsRepositoryBase: 'https://github.com/autoreg-ai/autoreg-docs/tree/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s | Autoreg Docs'
    }
  },
  navigation: {
    prev: true,
    next: true
  },
  darkMode: true,
  primaryHue: 221,
  footer: {
    text: `AutoReg © ${new Date().getFullYear()}`
  }
}
