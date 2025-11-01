import React, { useContext } from "react";
import ContainerLayout from "../../layouts/ContainerLayout/ContainerLayout";
import { Link, NavLink } from "react-router";
import { Menu } from "lucide-react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const navLink = (
    <>
      <li className="font-bold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/#">All Products</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/#">My Products</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/#">My Bids</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/#">Create Product</NavLink>
      </li>
    </>
  );
  return (
    <div className="w-full bg-white shadow-sm">
      <ContainerLayout>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="mr-2 cursor-pointer lg:hidden"
              >
                <Menu size={32} strokeWidth={3} />
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navLink}
              </ul>
            </div>
            <span className="text-4xl font-bold">
              Smart<span className="custom-linear-text">Deals</span>
            </span>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLink}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <button>Log Out</button>
            ) : (
              <>
                <div className="custom-linear-bg  p-0.5 rounded-md">
                  <button className=" py-1.5 px-4 rounded-sm bg-white cursor-pointer">
                    <Link
                      className="custom-linear-text"
                      to="/authentication/login"
                    >
                      Login
                    </Link>
                  </button>
                </div>
                <button className="py-2 px-4 rounded-sm ml-3 custom-linear-button">
                  <Link to="/authentication/register">Register</Link>
                </button>
              </>
            )}
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Navbar;
