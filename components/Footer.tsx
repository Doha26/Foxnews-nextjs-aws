import Image from 'next/image'
import Link from 'next/link'

const Footer = () => (
  <nav className="mb-0 fixed w-full z-10 bottom-0 bg-black ">
    <div className="flex flex-row items-center justify-between h-10 sm:w-9/12 sm:mx-auto mx-4 ">
      <Image src="/logo-img.svg" alt="Logo" width="25" height="25" />
      <Link href="https://twitter.com/Pavel_FFP">
        <h1 className="font-mono font-bold text-sm hidden md:block text-white cursor-pointer">© Pavel Foujeu</h1>
      </Link>
    </div>
  </nav>
)

export default Footer
