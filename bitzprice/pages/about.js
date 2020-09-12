import Link from "next/link";
import Layout from "../components/Layout/Layout";
import NavBar from "../components/NavBar/NavBar";

const about = () => {
  return (
    <Layout>
      <h1>About BitzPrice</h1>
      <p>Application to view bitcoin prices</p>
    </Layout>
  );
};

export default about;
