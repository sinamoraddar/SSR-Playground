import Head from "next/head";
import NavBar from "../NavBar/NavBar";

const Layout = (props) => {
  const { children } = props;
  return (
    <main>
      <Head>
        <title>BitsPrice</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
        ></link>
      </Head>
      <NavBar />
      <div className="container">{children}</div>
    </main>
  );
};

export default Layout;
