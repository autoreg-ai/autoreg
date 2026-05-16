export default {
  logo: <strong>Autoreg Docs</strong>,
  project: {
    link: 'https://github.com/langchain-ai/docs'
  },
  docsRepositoryBase: 'https://github.com/your-org/autoregr/tree/main',
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
    text: `Autoreg Documentation © ${new Date().getFullYear()}`
  }
}
