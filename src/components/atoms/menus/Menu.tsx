import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router";

const Menu = ({
  children = <AiOutlineShopping size={24} />,
  label = "home",
  to = "/notavailable",
}: {
  children?: React.ReactNode;
  label?: string;
  to?: string;
}) => {
  return (
    <Link to={to}>
      <div className="flex flex-col items-center justify-center gap-1.5 p-1.5">
        {children}
        <span className="text-xs font-medium capitalize">{label}</span>
      </div>
    </Link>
  );
};

export default Menu;
