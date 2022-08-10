import { useState } from "react";
import logo from "../../../images/logo.png";
import home from "../../../images/home.png";
import chervon from "../../../images/chervon.png";
import group from "../../../images/group.png";
import chart from "../../../images/chart.png";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [show, setShow] = useState(false);
  return (
    <div className="h-screen bg-white border-r-2 border-gray-100 w-side ">
      <div className="flex justify-center w-full pt-2 pb-10">
        <img src={logo} alt="logoalt" />
      </div>
      <div className="w-full pb-9">
        <div className="flex items-center pl-10">
          <img src={home} alt="homealt" className="w-5" />
          <Link to="/">
            <p className="pl-4 text-sm cursor-pointer font-manrope text-primary">Home</p>
          </Link>
        </div>
      </div>
      <div className="w-full">
        <div className="flex items-center pb-5 pl-10">
          <img src={group} alt="groupalt" className="w-5" />
          <p className="pl-4 pr-10 text-sm font-manrope text-primary">
            Account
          </p>
          <div className="cursor-pointer" onClick={() => setShow(!show)}>
            <img src={chervon} alt="chervonalt" className="w-2 pt-1" />
          </div>
        </div>
      </div>

      {show ? (
        <div className="pb-6">
          <div className="w-full py-5 mb-6 border-l-2 bg-faint border-thick-yellow">
            <div className="flex items-center pl-10">
              <div className="w-5"></div>
              <Link to="/contact">
                <p className="pl-3 pr-10 text-sm cursor-pointer font-manrope text-primary">
                  New Account
                </p>
              </Link>
            </div>
          </div>
          <div className="w-full">
            <div className="flex items-center pb-0 pl-10">
              <div className="w-5"></div>
              <p className="pl-4 pr-10 text-sm font-manrope text-primary">
                Status
              </p>
            </div>
          </div>
        </div>
      ) : null}

      <div className="w-full pt-4 pb-0">
        <div className="flex items-center pl-10">
          <img src={chart} alt="chartalt" className="w-5" />
          <p className="pl-4 text-sm font-manrope text-primary">Report</p>
        </div>
      </div>
    </div>
  );
}
