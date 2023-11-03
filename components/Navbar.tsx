import Link from "next/link";
import Image from "next/image";

const NavBar = () => (
  <header className="w-full  absolute z-10">
    <nav className="max-w-[1440px] mx-auto flex justify-center sm:justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
      <Link href="/" className="flex justify-center items-center">
        <span className="text-2xl">
          <span className="font-bold">A</span>
          uto <span className="font-bold">A</span>venue
        </span>
        <Image
          src="/logo.jpg"
          alt="logo"
          width={100}
          height={18}
          className="object-contain h-auto "
        />
      </Link>
    </nav>
  </header>
);

export default NavBar;
