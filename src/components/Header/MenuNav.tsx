import Link from 'next/link'

interface MenuNavProps {
  nav: boolean
  closeNav: () => void
}

export function MenuNav({ nav, closeNav }: MenuNavProps) {
  return (
    <nav
      className={`h-screen overflow-y-hidden overflow-x-hidden w-screen fixed top-0 right-0 flex flex-col justify-center gap-16 items-center  md:hidden  bg-yellow-bg text-gray-600 z-40  text-xl duration-1000
      `}
    >
      <Link
        onClick={closeNav}
        href="/home"
        className="text-2xl text-black
      "
      >
        Home
      </Link>

      <a onClick={closeNav} href="#" className="text-2xl text-black">
        Cardápio
      </a>

      <a onClick={closeNav} href="#" className="text-2xl text-black">
        Entre em Contato
      </a>

      <Link onClick={closeNav} href="/recipe" className="text-2xl text-black">
        Modo de preparo
      </Link>
    </nav>
  )
}
