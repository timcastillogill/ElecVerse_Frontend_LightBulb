import React from "react";

const Header = ({ basketTotal }) => {
  return (
    <header className="flex justify-between p-2 py-1 align-middle">
      <h1 className="ml-1 text-xl">
        <span className="mr-0.5">octopus</span>
        <span className="antialiased font-thin">energy</span>
      </h1>
      {basketTotal < 1 ? null : (
        <div className="absolute right-0">
          <small className="flex items-end justify-center p-1 text-xs text-white rounded-full">
            {basketTotal}
          </small>
        </div>
      )}
      <img
        className="py-2 pr-2 fill-current h-9"
        src="/basket.svg"
        alt="Your Shopping Basket"
      />
    </header>
  );
};

export default Header;
