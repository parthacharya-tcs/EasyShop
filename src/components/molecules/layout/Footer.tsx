import Menu from "@/components/atoms/menus/Menu";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineFeed, MdOutlineRocketLaunch } from "react-icons/md";
import { RiHome4Line } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="mx-auto flex w-[80%] justify-between gap-2 py-2">
      <Menu to="/home">
        <RiHome4Line size={24} />
      </Menu>
      <Menu label="Order" to="/order" />
      <Menu label="explore">
        <MdOutlineRocketLaunch size={24} />
      </Menu>
      <Menu label="feed">
        <MdOutlineFeed size={24} />
      </Menu>
      <Menu label="Profile" to="/">
        <IoPersonOutline size={24} />
      </Menu>
    </div>
  );
};

export default Footer;
