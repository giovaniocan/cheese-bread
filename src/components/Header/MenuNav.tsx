import Link from 'next/link'
import { useRouter } from 'next/router'

interface MenuNavProps {
  closeNav: () => void
}

export function MenuNav({ closeNav }: MenuNavProps) {
  const router = useRouter()
  const { pathname } = router

  const isFirstPage = pathname === '/home' || pathname === '/'
  return (
    <nav className="h-screen overflow-y-hidden overflow-x-hidden w-screen fixed z-10 top-0 right-0 flex flex-col justify-center gap-16 items-center md:hidden bg-yellow-bg text-2xl duration-1000">
      <Link onClick={closeNav} href="/home">
        Home
      </Link>

      {isFirstPage ? (
        <>
          <a href="#menu" onClick={closeNav} className="lg:text-xl">
            Cardápio
          </a>
          <a href="#contact" onClick={closeNav} className="lg:text-xl">
            Entre em Contato
          </a>
        </>
      ) : (
        <>
          <Link href="/#menu" onClick={closeNav} className="lg:text-xl">
            Cardápio
          </Link>
          <Link href="/#contact" onClick={closeNav} className="lg:text-xl">
            Entre em Contato
          </Link>
        </>
      )}
      <Link onClick={closeNav} href="/recipe">
        Modo de preparo
      </Link>
    </nav>
  )
}
