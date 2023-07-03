import React, { ChangeEvent, useState } from "react";
import { LoginInputs } from "../../types";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ADD_USER } from "../../redux/payload.types";

export default function SignIn() {
  const [inputs, setInputs] = useState<LoginInputs>({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputs = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignIn = async () => {
    const response = await fetch("http://localhost:3000/signin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(inputs),
      credentials: "include",
    });
    const re = await response.json();
    if (re.username) {
      dispatch({ type: ADD_USER, payload: re.username });
      navigate("/");
    } else {
      setError("Something went wrong, try again later");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      {error && <p>{error}</p>}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form id="log-form" className="space-y-6">
          <div>
            <label
              htmlFor="email-log"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email-log"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md pl-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                onChange={handleInputs}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="pass-log"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-purple-600 hover:text-purple-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="pass-log"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                onChange={handleInputs}
              />
            </div>
          </div>
          <div>
            <button
              type="button"
              className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              onClick={handleSignIn}
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          First time?{" "}
          <Link
            to="/signup"
            className="font-semibold leading-6 text-purple-600 hover:text-purple-500"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
