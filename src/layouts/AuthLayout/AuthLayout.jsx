import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";

const AuthLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
