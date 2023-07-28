import { Divider } from "@mui/material";
import React from "react";

function InfoColumn({ info }) {
  return (
    <>
      {info.map((item, index) => (
        <div className="flex flex-row gap-2">
          <div className="w-4/12 font-iransans h-12 text-xs my-1 pr-1 flex flex-wrap bg-lime-700 text-lime-50 rounded line-clamp-3">
            {item.name}
          </div>
          <div className="w-8/12 font-iransans h-12 text-sm my-1 bg-gradient-to-r from-lime-950 to-lime-700 text-lime-50 pr-1 rounded ">
            {item.value}
          </div>
        </div>
      ))}
    </>
  );
}

export default InfoColumn;
