import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const { googleLogin, createUser } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photo.value;
    const password = e.target.password.value;
    console.log({ name, email, photoURL, password });

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-base-100 min-h-[90vh] flex justify-center items-center">
      <div className=" card-body bg-white p-6 rounded-xl shadow-2xl w-full max-w-md mx-auto">
        <form onSubmit={handleFormSubmit}>
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-semibold  mb-2 text-gray-800">
              Register Now!
            </h2>

            <p className="text-gray-600">
              Already have an account?{" "}
              <Link className="custom-linear-text " to="/authentication/login">
                Login Now
              </Link>
            </p>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your Name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none hover:bg-gray-100 focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none hover:bg-gray-100 focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              PhotoURL
            </label>
            <input
              type="text"
              id="photo"
              placeholder="Enter your PhotoURL"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none hover:bg-gray-100 focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none hover:bg-gray-100  focus:border-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full btn-primary py-2.5! px-3 rounded-lg!"
          >
            Register
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="grow border-gray-300" />
          <span className="mx-3 text-gray-600 font-semibold">OR</span>
          <hr className="grow border-gray-300" />
        </div>

        {/* Social Login */}
        <div
          onClick={handleGoogleLogin}
          className="flex items-center cursor-pointer justify-center gap-2 border rounded-lg py-2 hover:bg-gray-100"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google logo"
            className="w-5 h-5"
          />
          <span className="font-semibold">Sign In With Google</span>
        </div>
      </div>
    </div>
  );
};

export default Register;
