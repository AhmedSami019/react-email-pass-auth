import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase.init";

const Login = () => {
    
    const [errorMassage, setErrorMassage] = useState('')

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);

        // default value
        setErrorMassage('')

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
        }).catch(error => {
            console.log(error);
            setErrorMassage(error.code)
        })
    }

  return (
    <div className="card bg-base-100 mx-auto mt-10 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Login now!</h1>

        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        {
            errorMassage && <p className="text-red-500">{errorMassage}</p>
        }
      </div>
    </div>
  );
};

export default Login;
