import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase.init";
import { Eye, EyeClosed, } from "lucide-react";
import { Link, NavLink } from "react-router";

const Register = () => {
  const [errorMassage, setErrorMassage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log(email, password, terms);

    // initial massage
    setSuccess(false);
    setErrorMassage("");

    if (!terms) {
      setErrorMassage("please except out terms & condition");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error.code);
        setErrorMassage(error.code);
      });
  };

  // to show and hide password
  const [passwordVisible, setPasswordVisible] = useState(false);

  const showAndHidePassword = () => {
    setPasswordVisible(!passwordVisible);
    return;
  };

  return (
    <div className="w-11/12 mx-auto text-center space-y-5">
      <h2>this is register page</h2>

      <form
        onSubmit={handleRegister}
        className="max-w-sm mx-auto flex flex-col border border-gray-300 p-6 rounded-2xl bg-gray-800 mt-10"
      >
        <h2 className="text-2xl font-medium mb-5">Create Account</h2>
        {/* this is email field */}
        <label className="input validator w-full">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input
            type="email"
            name="email"
            placeholder="mail@site.com"
            required
          />
        </label>
        <div className="validator-hint hidden">Enter valid email address</div>

        <br />

        {/* this is password field */}
        <label className="input validator w-full">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </g>
          </svg>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              required
              placeholder="Password"
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
            <button
              onClick={showAndHidePassword}
              className="absolute -right-26"
            >
              {passwordVisible ? (
                <Eye color="gray"></Eye>
              ) : (
                <EyeClosed color="gray"></EyeClosed>
              )}
            </button>
          </div>
        </label>
        {/* this is checkbox for terms */}
        <label className="label mt-7">
          <input type="checkbox" name="terms" className="checkbox" />
          Except terms & condition
        </label>
        <p className="validator-hint hidden">
          Must be more than 8 characters, including
          <br />
          At least one number <br />
          At least one lowercase letter <br />
          At least one uppercase letter
        </p>

        <br />

        <input className="btn btn-primary" type="submit" value="Sign up" />
        {errorMassage && <p className="text-red-400 mt-5">{errorMassage}</p>}
        {success && (
          <p className="text-green-500 mt-5">user has created successfully</p>
        )}
        <p className="flex text-start mt-4">
          Already have an Account? please  {""}  
         <Link className="text-blue-500 underline ml-2" to="/login"> Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
