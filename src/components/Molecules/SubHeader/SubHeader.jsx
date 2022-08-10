import React from "react";
import { useLocation } from "react-router-dom";
import { GoCheck } from "react-icons/go";

export default function SubHeader() {
  const location = useLocation();
  const { pathname } = location;
  const isEditAction = pathname.endsWith("/account");

  return (
    <div>
      <div className="bg-white h-16 rounded-md items-center flex pl-4 shadow-myshadow">
        <div>
          <div className="flex items-center">
            <div
              className={
                isEditAction
                  ? "bg-eleven text-primary  w-6 h-6 text-center rounded-xl"
                  : "bg-fifth text-white w-6 h-6 text-center rounded-xl"
              }
            >
              {isEditAction ? (
                <span className="flex justify-center items-center pt-1">
                  <GoCheck className="text-white" />
                </span>
              ) : (
                <div className="bg-fifth text-white text-s flex justify-center items-center w-6 h-6 text-center rounded-xl">
                  1
                </div>
              )}
            </div>
            <p
              className={
                isEditAction
                  ? "text-third uppercase text-s pl-2"
                  : "text-fifth uppercase text-s pl-2"
              }
            >
              Contact Details
            </p>
            <div className="w-4 bg-sixth h-px ml-2"></div>
          </div>
        </div>
        <div>
          <div className="flex items-center ml-2">
            <div
              className={
                isEditAction
                  ? "bg-fifth text-white text-s flex justify-center items-center w-6 h-6 text-center rounded-xl"
                  : "bg-sixth text-primary text-s flex justify-center items-center w-6 h-6 text-center rounded-xl"
              }
            >
              2
            </div>
            <p
              className={
                isEditAction
                  ? "text-fifth uppercase text-s pl-2"
                  : "text-third uppercase text-s pl-2"
              }
            >
              account service required
            </p>
            <div className="w-4 bg-sixth h-px ml-2"></div>
          </div>
        </div>
        <div>
          <div className="flex items-center ml-2">
            <div className="bg-sixth text-primary text-s flex justify-center items-center w-6 h-6 text-center rounded-xl">
              3
            </div>
            <p className="text-third uppercase text-s pl-2">
              Means of identification
            </p>
            <div className="w-4 bg-sixth h-px ml-2"></div>
          </div>
        </div>
        <div>
          <div className="flex items-center ml-2">
            <div className="bg-sixth text-primary text-s flex justify-center items-center w-6 h-6 text-center rounded-xl">
              4
            </div>
            <p className="text-third uppercase text-s pl-2">Mandate card</p>
            <div className="w-4 bg-sixth h-px ml-2"></div>
          </div>
        </div>
        <div>
          <div className="flex items-center ml-2">
            <div className="bg-sixth text-primary text-s flex justify-center items-center w-6 h-6 text-center rounded-xl">
              5
            </div>
            <p className="text-third uppercase text-s pl-2">checklist</p>
            <div className="w-4 bg-sixth h-px ml-2"></div>
          </div>
        </div>
        <div>
          <div className="flex items-center ml-2">
            <div className="bg-sixth text-primary text-s flex justify-center items-center w-6 h-6 text-center rounded-xl">
              5
            </div>
            <p className="text-third uppercase text-s pl-2">review</p>
          </div>
        </div>
      </div>
    </div>
  );
}
