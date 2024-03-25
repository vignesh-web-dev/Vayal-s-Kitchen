import React from "react";

const Type = ({ item }) => {
  return (
    <>
      {item.type == "nonveg" ? (
        <p className=" text-[#D51F0F] uppercase text-2xl">V*</p>
      ) : item.type == "veg" ? (
        <p className=" text-green uppercase text-2xl">V</p>
      ) : (
        <p className="text-[#1378FF] uppercase text-2xl">gf</p>
      )}
    </>
  );
};

export default Type;
