// a reusable component for login and sign up page
import React, { useCallback, useRef, useState } from "react";
import { Circles } from "react-loader-spinner";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link, useLocation } from "react-router-dom";
import GoogleButton from "react-google-button";
import { connect } from "react-redux";
import { startLogin } from "../../actions/authActions";
import useInput from "../../hooks/useInput";
import AppModal from "../application/AppModal";

const Login = ({ startLogin }) => {
  // state for turning the button text into loading
  const [buttonLoader, setButtonLoader] = useState(false);
  // state for showing and disabling modal related to errors of signing in and signing up
  const [showModal, setShowModal] = useState("");
  // using refs to solve the problem of clicking on labels to focus the input
  const passwordRef = useRef();
  const emailRef = useRef();
  const repeatPasswordRef = useRef();
  // location to read the url and figure it coming from sign up or login
  const { pathname } = useLocation();
  const signUpRoute = pathname === "/signup";

  const onLogInHandler = () => {
    startLogin();
  };

  // this function will determine the error message that is being sent to the moodal on sign up or sign in failure.
  const decideErrorMessage = useCallback((errorMessage) => {
    if (
      errorMessage ===
      "Firebase: Password should be at least 6 characters (auth/weak-password)."
    ) {
      return "Password should atleast be 6 characters.";
    } else if (
      errorMessage ===
      "Firebase: The email address is already in use by another account. (auth/email-already-in-use)."
    ) {
      return "Email is already in use.";
    } else if (
      errorMessage ===
      "Firebase: The email address is badly formatted. (auth/invalid-email)."
    ) {
      return "Invalid email format.";
    } // login form errors
    else if (
      errorMessage ===
      "Firebase: The password is invalid or the user does not have a password. (auth/wrong-password)."
    ) {
     return "Invalid password or the user has no password.";
    } else if (
      errorMessage ===
      "Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found)."
    ) {
      return "No user found with the provided email address.";
    } else if (
      errorMessage ===
      "Firebase: A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred. (auth/network-request-failed)."
    ) {
      return "Connection timed out. Check your internet connection and try again.";
    }
  }, []);


  const nameValidator = useCallback((value) => {
    if (value !== "") {
      return "";
    } else if (value === "") {
      return "this input is required.";
    }
  }, []);


  const confirmPasswordValidator = useCallback((value, passwordCheck) => {
    if (value === "") {
      return "this input is required.";
    } else if (value !== passwordCheck) {
      return "confirmation failed.";
    } else {
      return "";
    }
  }, []);
  const {
    inputValue: passwordInputValue,
    dispatchToInputUsage: dispatchToPasswordInputUsage,
    isInputValid: isPasswordInputValid,
    hasError: passwordHasError,
    errorMessage: passwordErrorMessage,
    handleOnInputChange: handleOnPasswordInputChange,
    handleOnInputBlur: handleOnPasswordInputBlur,
  } = useInput("", nameValidator);
  const {
    inputValue: emailInputValue,
    dispatchToInputUsage: dispatchToEmailInputUsage,
    isInputValid: isEmailInputValid,
    hasError: emailHasError,
    errorMessage: emailErrorMessage,
    handleOnInputChange: handleOnEmailInputChange,
    handleOnInputBlur: handleOnEmailInputBlur,
  } = useInput("", nameValidator);

  const {
    inputValue: repeatPasswordInputValue,
    dispatchToInputUsage: dispatchToRepeatPasswordInputUsage,
    isInputValid: isRepeatPasswordInputValid,
    hasError: repeatPasswordHasError,
    errorMessage: repeatPasswordErrorMessage,
    handleOnInputChange: handleOnRepeatPasswordInputChange,
    handleOnInputBlur: handleOnRepeatPasswordInputBlur,
  } = useInput("", confirmPasswordValidator, passwordInputValue);

  const handleOnFormSubmit = (e) => {
    e.preventDefault();

    dispatchToPasswordInputUsage({
      type: "SET_TOUCHED_TO_TRUE",
    });
    dispatchToEmailInputUsage({
      type: "SET_TOUCHED_TO_TRUE",
    });
    dispatchToRepeatPasswordInputUsage({
      type: "SET_TOUCHED_TO_TRUE",
    });

    // conditional submit processes for signing in and signing out

    // sign up
    if (
      signUpRoute &&
      isPasswordInputValid &&
      isEmailInputValid &&
      isRepeatPasswordInputValid
    ) {
      //creating account process
      setButtonLoader(true);
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, emailInputValue, passwordInputValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setShowModal(decideErrorMessage(errorMessage));
          // ..
        })
        .finally(() => {
          setButtonLoader(false);
        });
    } else if (!signUpRoute && isPasswordInputValid && isEmailInputValid) {
      // login process
      setButtonLoader(true);
      const auth = getAuth();
      signInWithEmailAndPassword(auth, emailInputValue, passwordInputValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setShowModal(decideErrorMessage(errorMessage));
        })
        .finally(() => {
          setButtonLoader(false);
        });
    }
  };
  return (
    <div className="login-container">
      <h1 className="login__title">
        <Link className="login-title__link" to="/">
          Budmoney
        </Link>
      </h1>
      <form className="login__form" onSubmit={handleOnFormSubmit}>
        <h1 className="login-form__title">
          {signUpRoute ? "Create an account" : "Sign in to your account"}
        </h1>
        <div
          className={`login-form-input__container ${
            emailHasError && `login-form__invalid`
          }`}
        >
          <input
            ref={emailRef}
            className="login-form__input"
            type="text"
            value={emailInputValue}
            onChange={(e) => handleOnEmailInputChange(e)}
            onBlur={handleOnEmailInputBlur}
            placeholder=""
          />
          <label
            className="login-form__label"
            onClick={() => emailRef.current.focus()}
          >
            Email
          </label>
          {emailHasError && (
            <label className="login-form-input__error">
              {emailErrorMessage}.
            </label>
          )}
        </div>
        <div
          className={`login-form-input__container ${
            passwordHasError && `login-form__invalid`
          }`}
        >
          <input
            ref={passwordRef}
            className="login-form__input"
            type="password"
            value={passwordInputValue}
            onChange={(e) => handleOnPasswordInputChange(e)}
            onBlur={handleOnPasswordInputBlur}
            placeholder=""
          />
          <label
            className="login-form__label"
            onClick={() => passwordRef.current.focus()}
          >
            Password
          </label>
          {passwordHasError && (
            <label className="login-form-input__error">
              {passwordErrorMessage}
            </label>
          )}
        </div>
        {signUpRoute && (
          <div
            className={`login-form-input__container ${
              repeatPasswordHasError && `login-form__invalid`
            }`}
          >
            <input
              ref={repeatPasswordRef}
              className="login-form__input"
              type="password"
              value={repeatPasswordInputValue}
              onChange={(e) => handleOnRepeatPasswordInputChange(e)}
              onBlur={handleOnRepeatPasswordInputBlur}
              placeholder=""
            />
            <label
              className="login-form__label"
              onClick={() => repeatPasswordRef.current.focus()}
            >
              Confirm password
            </label>
            {repeatPasswordHasError && (
              <label className="login-form-input__error">
                {repeatPasswordErrorMessage}
              </label>
            )}
          </div>
        )}
        <div className="login-form-button__container">
          <button className="login-form__button" type="submit">
            {!buttonLoader ? (signUpRoute ? "Sign Up" : "Login") : ""}
            {buttonLoader && (
              <Circles
                height="30"
                width="30"
                radius="9"
                color="white"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
              />
            )}
          </button>
        </div>
        <GoogleButton
          className="login__google-button"
          type="dark"
          label={signUpRoute ? "Sign Up With Google" : "Sign In With Google"}
          style={{
            justifySelf: "center",
            borderRadius: "4px",
            fontSize: "1.8rem",
            maxWidth: "250px",
            width: "95%",
          }}
          onClick={onLogInHandler}
        />
        {signUpRoute && (
          <Link className="login-form__no-account-text" to="/login">
            Already have an account?
          </Link>
        )}
        {!signUpRoute && (
          <Link className="login-form__no-account-text" to="/signup">
            Doesn't have an account? sign up here.
          </Link>
        )}
      </form>
      <AppModal
        titleText = {signUpRoute ? "Sign up" : "Log In"}
        processName = 'login or signup failure'
        warningMessage = {showModal}
        showModal={!!showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    startLogin: () => dispatch(startLogin()),
  };
};

export default connect(undefined, mapDispatchToProps)(Login);
