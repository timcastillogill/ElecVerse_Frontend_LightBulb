import React from "react";

const Header = ({ basketTotal }) => {
  return (
    <header className="flex justify-between p-2 py-1 align-middle">
      <h1 className="ml-1 text-xl">
        <span className="mr-0.5">octopus</span>
        <span className="antialiased font-thin">energy</span>
      </h1>
      <div>
        {basketTotal <= 1 ? null : (
          <div className="absolute mb-1 right-1 md:right-7">
            <small className="flex items-end justify-center p-1 text-xs text-white">
              {basketTotal}
            </small>
          </div>
        )}
        <img
          className="py-2 pr-2 fill-current h-9 md:mr-7 md:h-10"
          src="/basket.svg"
          alt="Your Shopping Basket"
        />
      </div>
    </header>
  );
};

export default Header;
