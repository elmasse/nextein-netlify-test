import Document, { Head, Main, NextScript } from 'next/document'

const dev = process.env.NODE_ENV !== 'production'

export default class MyDocument extends Document {

  render () {
    return (
      <html lang="en">
        <Head>
          <title>Nextein Netlify CMS Test</title>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}