import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between">
      <h1>octopusenergy</h1>

      <img
        className="h-4 w-4 flex-no-shrink fill-current"
        src="/basket.svg"
        alt="Your Shopping Basket"
      />
    </div>
  );
};

export default Header;
