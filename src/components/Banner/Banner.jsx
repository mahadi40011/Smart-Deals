import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout/ContainerLayout";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="max-w-[1650px] mx-auto  pt-16 pb-20  multi-bg">
      <ContainerLayout>
        <header className="text-center flex flex-col justify-center items-center">
          <h1 className="font-bold text-6xl">
            Deal your <span className="custom-linear-text">Products</span>{" "}
            <br /> in a <span className="custom-linear-text">Smart</span> way !
          </h1>
          <p className="text-xl mt-4 mb-8">
            SmartDeals helps you sell, resell, and shop from trusted local
            sellers — all in one place!
          </p>
          <div className="flex gap-5">
            <button className=" btn-primary">
              <Link to="/">Watch all Products</Link>
            </button>
            <div className="custom-linear-bg p-0.5 rounded-md">
              <button className=" py-1.5 px-4 rounded-sm bg-white cursor-pointer">
                <Link className="custom-linear-text" to="/">
                  Post a Product
                </Link>
              </button>
            </div>
          </div>
        </header>
      </ContainerLayout>
    </div>
  );
};

export default Banner;
