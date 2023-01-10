import Form from "../components/Form";
import AuthContext from "../store/AuthContext";
import { useContext } from "react";

const SignInPage = () => {
  const context = useContext(AuthContext);

  return (
    <>
      <Form />
    </>
  );
};

export default SignInPage;
