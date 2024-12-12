import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faHome } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import logo2 from "../../public/logogreen.png";
import yt from "../../public/youtube (2).png";
import insta from "../../public/instagram_2111463.png";

function MobileDrawer({ isOpen, onClose }: any) {
  return (
    <div
      className={`fixed flex flex-col z-10 top-0 right-0 h-full w-full bg-white transition-transform duration-300 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between py-1 mx-10 mt-4">
        <div className="">
          <Link href="/">
            <Image onClick={onClose} src={logo2} width={220} alt="logo" />
          </Link>
        </div>
        <button className="" onClick={onClose}>
          <FontAwesomeIcon
            className="text-neutral-600 text-[24px]"
            icon={faXmark}
          />
        </button>
      </div>
      <hr className="border-neutral-300 mt-2 w-full" />
      <ul
        onClick={onClose}
        className="flex flex-col px-10 space-y-4 text-1xl mt-10 text-neutral-800 font-mono uppercase"
      >
        <li className=" hover:underline space-y-3">
          <Link href="/category/beekeeping">Beekeeping</Link>
          <hr className="border-neutral-300 w-full" />
        </li>

        <li className=" hover:underline space-y-3">
          <Link href="/category/off-grid">Off-Grid</Link>
          <hr className="border-neutral-300 w-full" />
        </li>
        <li className=" hover:underline space-y-3">
          <Link href="/category/gardening">Gardening</Link>
          {/* <hr className="border-neutral-300 w-full" /> */}
        </li>
      </ul>
      <hr className="border-black border-t-2 mt-10 w-full" />
      <ul
        onClick={onClose}
        className="flex flex-col px-10 mt-10 space-y-4 text-md text-neutral-600 font-mono font-thin"
      >
        <li className="hover:underline">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:underline">
          <Link href="https://www.youtube.com/@offgridjim" target="_blank">
            YouTube
          </Link>
        </li>
        <li className="hover:underline">
          <Link
            href="https://www.instagram.com/jimwhitefordhomesteading"
            target="_blank"
          >
            Instagram
          </Link>
        </li>
      </ul>
      <hr className="border-black border-t-2 mt-10 w-full" />
    </div>
  );
}

export default MobileDrawer;
