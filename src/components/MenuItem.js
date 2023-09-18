import React from "react";
import { MEDIA_URL } from "../util/contants";

const MenuItem = ({ data }) => {
  const { name, category, imageId, price } = data.card.info;
  return (
    <div className="flex p-4 m-1 border border-b-slate-100">
      <div className="w-5/6">
        <p className="font-bold">
          {name} <span> - ₹ {price / 100}</span>
        </p>
        <p>{category}</p>
      </div>
      <div className="w-1/6 relative">
        <img src={MEDIA_URL + imageId} alt="item Image" />
        <button className="bg-slate-900 text-sm text-white rounded-sm absolute left-6 bottom-0.5 px-1">
          Add
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
