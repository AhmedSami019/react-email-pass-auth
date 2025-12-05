import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../../firebase.init";
import { Link } from "react-router";

const Login = () => {
  const [errorMassage, setErrorMassage] = useState("");
  const [success, setSuccess] = useState(false);
  const emailRef = useRef()

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // default value
    setErrorMassage("");
    setSuccess(false);

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        if (!result.user.emailVerified) {
          alert("your email is not verified");
        } else {
          setSuccess(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorMassage(error.code);
      });
  };

  const handleResetPassword = ()=>{
    const email = emailRef.current.value
    sendPasswordResetEmail(auth, email)
    .then(()=>{
      alert("check your mail for reset password")
    }).catch(error=> {
      alert(error.code)
    })

  }

  return (
    <div className="card bg-base-100 mx-auto mt-10 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Login now!</h1>

        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            ref={emailRef}
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a onClick={handleResetPassword} className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        {errorMassage && <p className="text-red-500">{errorMassage}</p>}
        {success && (
          <p className="text-green-500">user logged in successfully</p>
        )}
        <p>
          have no account? please{" "}
          <Link className="text-blue-500 underline" to="/signUp">
            Sing up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
