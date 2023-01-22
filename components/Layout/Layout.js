import Footer from "../Footer";
import NavBar from "./MainNavigation";

const Layout = (props) => {
  return (
    <>
      <NavBar />
      {/* <main className="bg-dark">{props.children}</main> */}
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
