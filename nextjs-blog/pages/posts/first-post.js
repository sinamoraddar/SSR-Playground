import Head from "next/head";
import Layout from "../../components/layout";

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>this is my first post</h1>
    </Layout>
  );
};

export default FirstPost;
