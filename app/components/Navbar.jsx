import Link from "next/link";
import ProfileIcon from "./ProfileIcon";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between fixed left-10 right-10 px-8 h-14 bg-black-500 text-white border border-md shadow-md">
      <Link
        className="font-bold"
        href={"/"}>
        <Image
          src="/MyLogo.png"
          width={100}
          height={100}
          alt="logo"
        />
      </Link>
      <ProfileIcon />
    </nav>
  );
}
