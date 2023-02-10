import Form from "../components/Form";
// import AuthContext from "../store/AuthContext";
import { useContext, useEffect } from "react";

const SignInPage = () => {
  // const context = useContext(AuthContext);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <div>
      <Form />
    </div>
  );
};

export default SignInPage;
