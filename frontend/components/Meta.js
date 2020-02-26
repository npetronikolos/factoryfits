import NextHead from "next/head";

const Meta = () => (
  <NextHead>
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <meta charSet='utf-8' />
    <link rel='shortcut icon' href='/static/favicon.png' />
    <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
    <title>Factory Fits!</title>
  </NextHead>
);

export default Meta;
