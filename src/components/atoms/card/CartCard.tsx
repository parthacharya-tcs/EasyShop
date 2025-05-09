import DustbinBtn from "../Button/DustbinBtn";
import { RiDiscountPercentFill } from "react-icons/ri";

const CartCard = () => {
  return (
    <div className="relative z-0 flex w-full justify-between gap-2 p-2 rounded-md text-black">
      <div className="absolute top-1 right-2 z-10 ml-auto h-fit">
        <DustbinBtn />
      </div>
      <div className="img-holder aspect-square h-24 w-24 overflow-hidden rounded-lg">
        <img
          className="aspect-square h-full w-full object-cover object-center"
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt=""
        />
      </div>
      <div className="rounded-md grow bg-[rgba(255,255,255,0.22)] px-3 py-2.5 text-base backdrop-blur-sm">
        <h4 className="py-0 font-medium capitalize">red Nike</h4>
        <div className="flex flex-col gap-0.5">
          <span>$48</span>
          <span className="inline-flex items-center gap-1 text-amber-700">
            <RiDiscountPercentFill />
            10% <span className="font-medium">off</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
