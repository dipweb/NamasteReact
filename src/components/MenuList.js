import React, { useState } from "react";
import { Downarrow } from "../icons/Icons";
import MenuItem from "./MenuItem";

const MenuList = ({ data, showItems, setItemIndex }) => {
  const { title, itemCards } = data.card.card;

  const handleAccordian = () => {
    setItemIndex();
  };
  return (
    <div className="w-1/2 my-2 p-2 m-auto">
      <div
        className="flex p-2 cursor-pointer  justify-between items-center bg-slate-100"
        onClick={handleAccordian}
      >
        <span className="font-bold">
          {title} <span> ({itemCards.length})</span>
        </span>
        <span>
          <Downarrow />
        </span>
      </div>
      {showItems && (
        <div className="">
          {itemCards.map((item, index) => {
            return <MenuItem key={index} data={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default MenuList;
