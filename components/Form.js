import { useState, useRef, useContext } from "react";
import AuthContext from "../store/AuthContext";
import { useRouter } from "next/router";

import movieBackDrop from "./movieBackDrop";

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
    <div className="text-light container h-100 ">
      <form
        className=" pt-3 pb-5  bg-dark col-md-12 col-sm-12 col-12 col-lg-12"
        onSubmit={submitHandler}
      >
        <h1
          className="text-center fw-bold p-3"
          style={{ fontSize: "3rem", color: "red" }}
        >
          Welcome to WatchFlix, {signIn ? "Sign in" : "Sign up"}
        </h1>
        <div className="row  justify-content-center pt-5">
          <div className="col-sm-10 col-md-6 col-lg-6 col-10 pt-3">
            <input
              type="email"
              className="form-control form-control-lg bg-dark text-light"
              id="inputEmail3"
              placeholder="Email"
              ref={emailInputRef}
            />
          </div>
        </div>
        <div className="row  justify-content-center">
          <div className="pt-3 col-sm-10 col-md-6 col-lg-6 col-10">
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
              className="btn col-10 col-sm-10 col-md-6 col-lg-6 "
              style={{ color: "white", backgroundColor: "red" }}
            >
              {signIn ? "sign in" : "sign up"}
            </button>
          )}
          {loading && (
            <p className="text-light text-center">Sending request.....</p>
          )}
        </div>

        <div className="form-check d-flex justify-content-evenly  fs-6">
          <div className="d-flex justify-content-center">
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
        <div className="fs-6 text-center">
          <div className="d-flex justify-content-center align-items-center pt-3">
            {/* <p>New to Watchflix?</p> */}
            <button
              className="btn btn-success col-10 col-sm-10 col-md-6 col-lg-6"
              onClick={signInSwitchHandler}
            >
              {signIn ? "Sign up" : "Sign in"}
            </button>
          </div>

          <p className="pt-3">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
