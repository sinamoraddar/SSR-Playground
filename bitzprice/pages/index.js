import Layout from "../components/Layout/Layout";
import NavBar from "../components/NavBar/NavBar";
import Prices from "../components/Prices/Prices";

const index = ({ bpi }) => {
  return (
    <Layout>
      <h1>Welcome to Bitzprice</h1>
      <Prices bpi={bpi} />
    </Layout>
  );
};

index.getInitialProps = async function () {
  const result = await fetch(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );
  const data = await result.json();
  return {
    bpi: data.bpi,
  };
};
export default index;
