import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* icon region */}
        <link rel="shortcut icon" href="/cat.svg" type="image/svg+xml" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;700;900&display=swap" rel="stylesheet"></link>
     
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
