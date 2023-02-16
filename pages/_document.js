import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {

  return (
    <Html lang="en">
      <Head>
      </Head>
      <body >
        <link rel="stylesheet" href={`${process.env.BASE_URL}css/dynamic-color.css`} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
