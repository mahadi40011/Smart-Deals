import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="bg-base-100 min-h-[90vh] flex justify-center items-center">
      <div class=" card-body bg-white p-6 rounded-xl shadow-2xl w-full max-w-md mx-auto">
        <form>
          <div className="mb-6 text-center">
            <h2 class="text-3xl font-semibold  mb-2 text-gray-800">Register Now!</h2>

            <p className="text-gray-600">
              Already have an account?{" "}
              <Link className="custom-linear-text " to="/authentication/login">
                Login Now
              </Link>
            </p>
          </div>

          <div class="mb-4">
            <label
              for="name"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your Name"
              class="w-full px-3 py-2 border rounded-lg focus:outline-none hover:bg-gray-100 focus:border-indigo-500"
              required
            />
          </div>

          <div class="mb-4">
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              class="w-full px-3 py-2 border rounded-lg focus:outline-none hover:bg-gray-100 focus:border-indigo-500"
              required
            />
          </div>

          <div class="mb-4">
            <label
              for="photo"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              PhotoURL
            </label>
            <input
              type="text"
              id="photo"
              placeholder="Enter your PhotoURL"
              class="w-full px-3 py-2 border rounded-lg focus:outline-none hover:bg-gray-100 focus:border-indigo-500"
              required
            />
          </div>

          <div class="mb-6">
            <label
              for="password"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              class="w-full px-3 py-2 border rounded-lg focus:outline-none hover:bg-gray-100  focus:border-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            class="w-full font-semibold custom-linear-button py-2 px-3 rounded-lg"
          >
            Register
          </button>
        </form>

        <div class="flex items-center my-4">
          <hr class="grow border-gray-300" />
          <span class="mx-3 text-gray-600 font-semibold">OR</span>
          <hr class="grow border-gray-300" />
        </div>

        {/* Social Login */}
        <div className="flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-100">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google logo"
            class="w-5 h-5"
          />
          <span className="font-semibold">Sign In With Google</span>
        </div>

      </div>
    </div>
  );
};

export default Register;
