import NextHead from "next/head";

// TODO folder static must go under public. but can not find nprogress after

const Meta = () => (
  <NextHead>
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <meta charSet='utf-8' />
    <link rel='shortcut icon' href='../public/static/favicon.png' />
    <title>Factory Fits!</title>
  </NextHead>
);

export default Meta;
