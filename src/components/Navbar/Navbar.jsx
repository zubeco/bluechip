import menu from "../../images/menu.png";
import avatar from "../../images/avatar.png";
import bell from "../../images/bell.png";
import help from "../../images/help.png";
import chervon from "../../images/chervon.png";

export default function Navbar() {
  return (
    <div className="bg-white h-16 flex justify-between items-center pl-10 pr-12">
      <div>
        <img src={menu} alt="menualt" className="w-4" />
      </div>
      <div className="flex items-center justify-around w-56">
        <div>
          <img src={help} alt="helpalt" className="w-4" />
        </div>
        <div>
          <img src={bell} alt="bellalt" className="w-4" />
        </div>
        <div>
          <img src={avatar} alt="avataralt" className="w-6" />
        </div>
        <div className="text-sec">
          <h4 className="text-xs">David Tomiwa</h4>
          <p className="text-s">CSO</p>
        </div>
        <div>
          <img src={chervon} alt="chervronalt" className="w-3" />
        </div>
      </div>
    </div>
  );
}
