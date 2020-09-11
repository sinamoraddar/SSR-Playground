const { default: NavBar } = require("../NavBar");

const Layout = (props) => {
  const { children } = props;
  return (
    <main>
      <NavBar />
      {children}
    </main>
  );
};

export default Layout;
