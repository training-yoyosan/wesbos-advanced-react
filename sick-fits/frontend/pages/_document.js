import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ro-RO">
        <Head />

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
