import React from "react";
import { Menu } from "@headlessui/react";
import Cart from "./cart/cart";

const Header = ({ cartTotal, productName }) => {
  return (
    <header className="flex justify-between p-2 py-1 align-middle">
      <h1 className="ml-1 text-xl">
        <span className="mr-0.5">octopus</span>
        <span className="antialiased font-thin">energy</span>
      </h1>
      <div>
        {cartTotal <= 1 ? null : (
          <div className="absolute mb-1 right-1 md:right-7">
            <small className="flex items-end justify-center p-1 text-xs text-white">
              {cartTotal}
            </small>
          </div>
        )}
        <Menu>
          <Menu.Button aria-label="Open Shopping Cart" aria-haspopup="true">
            <img
              className="py-2 pr-2 cursor-pointer fill-current  top-1 right-2 h-9 md:mr-7 md:h-10"
              src="/basket.svg"
              alt="Your Shopping Cart"
            />
          </Menu.Button>

          <Menu.Items className="absolute right-0 z-10 mt-2 rounded-lg shadow-lg">
            {({ active }) => (
              <div className={`${active}`}>
                <Cart productName={productName} productQuantity={cartTotal} />
              </div>
            )}
          </Menu.Items>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
