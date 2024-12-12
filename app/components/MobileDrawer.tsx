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
      className={`fixed flex flex-col z-10 top-0 right-0 h-full w-full bg-white text-neutral-600 transition-transform duration-300 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button className="absolute right-7 top-7 p-3" onClick={onClose}>
        <FontAwesomeIcon className=" text-3xl" icon={faXmark} />
      </button>
      <div className="px-10 mt-9">
        <Link href="/">
          <Image onClick={onClose} src={logo2} width={150} alt="logo" />
        </Link>
      </div>
      <hr className="border-black my-8 w-full" />
      <ul onClick={onClose} className="flex flex-col px-10 space-y-4 text-1xl">
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
      <hr className="border-black my-6 w-full" />
      <ul
        onClick={onClose}
        className="flex flex-col px-10 space-y-4 text-1xl uppercase"
      >
        <li className=" hover:underline">
          <Link href="/category/beekeeping">Beekeeping</Link>
        </li>
        <li className=" hover:underline">
          <Link href="/category/off-grid">Off-Grid</Link>
        </li>
        <li className=" hover:underline">
          <Link href="/category/gardening">Gardening</Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileDrawer;
