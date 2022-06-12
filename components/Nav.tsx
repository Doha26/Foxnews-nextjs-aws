import Image from "next/image";
import Link from "next/link";

const Nav = () => (
  <nav className="mt-0 fixed w-full z-10 top-0 bg-white ">
    <div className="flex flex-row items-center justify-between h-16 w-9/12 mx-auto  ">
      <div className="flex flex-row items-center">
        <Image src="/logo-img.svg" alt="Logo" width="39" height="32" />
        <Link href="/">
          <a className="font-mono font-bold text-3xl p-2 hidden sm:block cursor-pointer">
            FoxNews
          </a>
        </Link>
      </div>
      <h1 className="font-mono font-bold text-sm hidden sm:block">Call Us (348)981.872 / hello@foxnews.com</h1>
      <h1 className="font-mono font-bold text-sm hover:underline hover:cursor-pointer hover:font-bold">Login</h1>
    </div>
  </nav>
)

export default Nav;
