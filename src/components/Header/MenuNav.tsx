import Link from 'next/link'

interface MenuNavProps {
  closeNav: () => void
}

export function MenuNav({ closeNav }: MenuNavProps) {
  return (
    <nav className="h-screen overflow-y-hidden overflow-x-hidden w-screen fixed z-40 top-0 right-0 flex flex-col justify-center gap-16 items-center md:hidden bg-yellow-bg text-2xl duration-1000">
      <Link onClick={closeNav} href="/home">
        Home
      </Link>

      <a onClick={closeNav} href="#">
        Cardápio
      </a>

      <a onClick={closeNav} href="#">
        Entre em Contato
      </a>

      <Link onClick={closeNav} href="/recipe">
        Modo de preparo
      </Link>
    </nav>
  )
}
