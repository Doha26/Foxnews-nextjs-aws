import Image from 'next/image'
import Link from 'next/link'

const Nav = () => (
  <nav className="mt-0 fixed w-full z-10 top-0 bg-black ">
    <div className="flex flex-row items-center justify-between h-16 sm:w-9/12 sm:mx-auto mx-4 ">
      <div className="flex flex-row">
        <Image src="/logo-img.svg" alt="Logo" width="36" height="36" />
        <Link href="/">
          <a className="font-mono font-bold text-3xl p-2 hidden sm:block cursor-pointer text-white">FoxNews</a>
        </Link>
      </div>
      <h1 className="font-mono font-bold text-sm hidden md:block text-white">
        Call Us (348)981.872 / hello@foxnews.com
      </h1>
      <h1 className="font-mono font-bold text-sm hover:underline hover:cursor-pointer hover:font-bold text-white">
        Login
      </h1>
    </div>
  </nav>
)

export default Nav
