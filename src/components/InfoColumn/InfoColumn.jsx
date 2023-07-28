import { Divider } from "@mui/material";
import React from "react";

function InfoColumn({ info }) {
  return (
    <>
      {info.map((item, index) => (
        <div className="flex flex-row gap-2">
          <div className="w-4/12 font-iransans h-16 text-xs my-1 pr-1 flex flex-wrap bg-zinc-100">
            {item.name}
          </div>
          <div className="w-8/12 font-iransans h-16 text-sm my-1 bg-lime-50">
            {item.value}
          </div>
        </div>
      ))}
    </>
  );
}

export default InfoColumn;
