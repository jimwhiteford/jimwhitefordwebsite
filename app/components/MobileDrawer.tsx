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
      className={`fixed flex flex-col z-10 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button className="absolute right-7 top-5 p-3" onClick={onClose}>
        <FontAwesomeIcon className="text-neutral-700 text-4xl" icon={faXmark} />
      </button>
      <div className="px-5 mt-8">
        <Link href="/" className="">
          <Image onClick={onClose} src={logo2} width={200} alt="logo" />
        </Link>
      </div>
      <hr className="border-black my-6 w-full" />
      <ul
        onClick={onClose}
        className="flex flex-col space-y-4 text-neutral-700"
      >
        <li className="text-2xl px-10 hover:underline hover:font-semibold">
          <Link href="/">Home</Link>
        </li>
        <li className="flex text-2xl px-10 hover:underline hover:font-semibold">
          <Link href="https://www.youtube.com/@offgridjim" target="_blank">
            YouTube
          </Link>
        </li>
        <li className="flex text-2xl px-10 hover:underline hover:font-semibold">
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
        className="flex flex-col space-y-3 px-10 mb-32 text-2xl text-neutral-700 uppercase"
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
