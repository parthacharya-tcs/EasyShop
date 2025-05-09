import { AiOutlineShopping } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { IoLogoOctocat } from "react-icons/io5";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="relative flex items-center justify-between px-3 py-4">
      <div className="flex flex-col text-base">
        <span className="text-sm text-gray-400">Location</span>
        <select
          className="-ml-1 cursor-pointer pr-1.5"
          name="location"
          id="location"
        >
          <option value="New-York">New York, USA</option>
          <option value="New-York">New York, USA</option>
          <option value="New-York">New York, USA</option>
        </select>
      </div>
      <div className="absolute inset-0 m-auto h-fit w-fit">
        <IoLogoOctocat size={44} />
      </div>
      <div className="flex items-center gap-4 text-base">
        <Link to="/favProduct">
          <CiHeart size={32} />
        </Link>
        <AiOutlineShopping size={32} />
      </div>
    </div>
  );
};

export default Header;
