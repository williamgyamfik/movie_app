// import Footer from "../Footer";
import NavBar from "./MainNavigation";

const Layout = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
