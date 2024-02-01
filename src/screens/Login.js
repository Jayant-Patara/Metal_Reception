import React, { useState } from "react";
import "./css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      if (auth) {
        navigate("/");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="bg">
        <div className="star-field">
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
        </div>
        <div className="login">
          <Link to="/">
            <img
              className="login_logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScuMZlw0vzSElIo7qyBswGr_nzZdw9B0SQrY0haIhYtg&spngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Logo"
            />
          </Link>
          <div className="login_container">
            <h1>Sign-in</h1>
            <form>
              <h5>E-mail</h5>
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <h5>Password</h5>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button
                onClick={signIn}
                type="submit"
                className="login_signInButton"
              >
                Sign In
              </button>
              <p>
                By signing-in you agree to Metal Reception Conditions of Use &
                Sale. Please see our Privacy Notice, our Cookies Notice and out
                Interest-Based Ads Notice.
              </p>
              <button onClick={register} className="login_registerButton">
                Create your Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
