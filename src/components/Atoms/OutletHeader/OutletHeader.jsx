import React from "react";

export default function OutletHeader() {
  return (
    <div>
      <div className="h-24  rounded-t-md border-gray-100 border-b-2 pl-12 items-center flex">
        <div className="flex items-center">
          <div className="rounded-3xl w-14 ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQ-YHX2i3RvTDDmpfnde4qyb2P8up7Wi3Ww&usqp=CAU"
              alt="profilealt"
              className="rounded-full"
            />
          </div>
          <div className="pl-4">
            <h2 className="font-manrope font-bold text-base text-third pb-1">
              Tomiwa Ogunremi
            </h2>
            <p className="text-seven text-s font-normal">BVN:3939848490505</p>
          </div>
        </div>
      </div>
    </div>
  );
}
