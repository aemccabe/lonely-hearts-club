import Shell from "./Shell";
import Head from "next/head";
import LetterBox from "./LetterBox";

const layoutStyle = {
  // margin: 20,
  // padding: 20,
  // border: "1px solid #DDD"
};

const Layout = props => (
  <div>
    <Head>
      <title>Lonely Hearts</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Oswald"
        rel="stylesheet"
      />
    </Head>

    <Shell>
      <LetterBox>{props.children}</LetterBox>
    </Shell>

    <style global jsx>{`
      body {
        font-family: "Oswald", sans-serif;
        letter-spacing: 0.05em;
        margin: 0;
        background-color: white;
        display: grid;
      }
      button {
        font-family: "Oswald", sans-serif;
      }
    `}</style>
  </div>
);

export default Layout;
