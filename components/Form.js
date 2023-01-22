import { useState, useRef, useContext } from "react";
import AuthContext from "../store/AuthContext";
import { useRouter } from "next/router";
// import { useNavigate } from "react-router-dom";

const Form = () => {
  const router = useRouter();

  const contxt = useContext(AuthContext);

  const [signIn, setSigIn] = useState(true);

  const [loading, setIsLoading] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const signInSwitchHandler = (e) => {
    e.preventDefault();
    setSigIn((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const emailInputValue = emailInputRef.current.value;
    const passwordInputValue = passwordInputRef.current.value;

    setIsLoading(true);
    let url;
    if (signIn) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB7IK-tMLzuzLwuyg0D9HxMVERuxEsRV5E";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB7IK-tMLzuzLwuyg0D9HxMVERuxEsRV5E ";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: emailInputValue,
        password: passwordInputValue,
        returnSecureToken: true,
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        setIsLoading(false);
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            let errorMessage;
            if (data.error && data.error.message && data) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );

        contxt.login(data.idToken, expirationTime.toISOString());

        router.push("/home");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="text-light container h-100 pt-5">
      <div
        className="row h-100 justify-content-center align-items-center "
        style={{ paddingTop: "9rem" }}
      >
        <form className=" pt-3 pb-5 w-25 bg-dark " onSubmit={submitHandler}>
          <h2 className="text-center">{signIn ? "Sign in" : "Sign up"}</h2>
          <div className="row mb-3 justify-content-center">
            <div className="col-sm-10 pb-5 pt-5">
              <input
                type="email"
                className="form-control form-control-lg bg-dark text-light"
                id="inputEmail3"
                placeholder="Email"
                ref={emailInputRef}
              />
            </div>
          </div>
          <div className="row mb-3 justify-content-center">
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control form-control-lg bg-dark text-light"
                id="inputPassword3"
                placeholder="Password"
                ref={passwordInputRef}
              />
            </div>
          </div>
          <div className="text-center pb-3 pt-5">
            {!loading && (
              <button
                type="submit"
                className="btn col-sm-10 "
                style={{ color: "white", backgroundColor: "red" }}
              >
                {signIn ? "sign in" : "sign up"}
              </button>
            )}
            {loading && (
              <p className="text-light text-center">Sending request.....</p>
            )}
          </div>

          <div className="form-check d-flex justify-content-between fs-6s">
            <div className="d-flex justify-content-endss">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Remember me
              </label>
            </div>
            <p>Need Help?</p>
          </div>
          <div className="fs-6">
            <div>
              <p>
                New to Watchflix?{" "}
                <button
                  className="btn btn-success"
                  onClick={signInSwitchHandler}
                >
                  {signIn ? "Sign up" : "Sign in"}
                </button>
              </p>
            </div>

            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
