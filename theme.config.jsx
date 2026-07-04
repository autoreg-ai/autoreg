export default {
  logo: (
    <>
      <img
        src="/autoreg_logo.png"
        alt="AutoReg"
        style={{ height: 36, width: 'auto' }}
        className="autoreg-logo-light"
      />
      <img
        src="/autoreg_logo_dark.png"
        alt="AutoReg"
        style={{ height: 36, width: 'auto' }}
        className="autoreg-logo-dark"
      />
      <style jsx global>{`
        html[class~='dark'] .autoreg-logo-light {
          display: none;
        }
        html:not([class~='dark']) .autoreg-logo-dark {
          display: none;
        }
      `}</style>
    </>
  ),
  head: (
    <>
      <link rel="icon" type="image/png" href="/icon.png" />
      <link rel="apple-touch-icon" href="/icon.png" />
    </>
  ),
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
