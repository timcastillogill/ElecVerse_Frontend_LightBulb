import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between p-2 py-1 align-middle">
      <h1 className="ml-1 text-xl">
        <span className="mr-0.5">octopus</span>
        <span className="antialiased font-thin">energy</span>
      </h1>

      <img
        className="py-2 pr-2 fill-current h-9"
        src="/basket.svg"
        alt="Your Shopping Basket"
      />
    </div>
  );
};

export default Header;
