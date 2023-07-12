import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { List, X } from 'phosphor-react'
import { useState } from 'react'
import { MenuNav } from './MenuNav'

export function Header() {
  const router = useRouter()
  const { pathname } = router

  const [isModalOpen, setIsModalOpen] = useState(false)

  function handletoggleNav() {
    setIsModalOpen(!isModalOpen)
  }
  return (
    <header className="bg-yellow-bg fixed w-screen flex justify-between items-center drop-shadow-lg z-10 px-2 lg:px-1 xl:px-20 py-3">
      <div className="flex items-center justify-center gap-3 md:gap-12">
        <Image
          alt=""
          src="/logo.svg"
          width={120}
          height={80}
          className="w-28 h-20"
        />
        <h1 className="text-base md:text-xl lg:text-2xl">Maná pão de queijo</h1>
      </div>

      <nav className="hidden lg:flex items-center gap-7 mr-20">
        <Link
          href="/home"
          className={`lg:text-xl ${
            pathname === '/home' || pathname === '/'
              ? 'font-bold underline underline-offset-8'
              : ''
          }`}
        >
          Home
        </Link>
        <a href="#" className=" lg:text-xl">
          Cardápio
        </a>
        <a href="#" className="lg:text-xl">
          Entre em Contato
        </a>
        <Link
          href="/recipe"
          className={` lg:text-xl ${
            pathname === '/recipe' && 'font-bold underline underline-offset-8'
          } `}
        >
          Modo de preparo
        </Link>
      </nav>

      <div className="transition-transform lg:hidden">
        {isModalOpen ? (
          <X
            size={45}
            onClick={handletoggleNav}
            className="fixed z-50 right-4 top-8 text-3xl text-dark lg:hidden transition-all"
          />
        ) : (
          <List
            className="transition-all"
            size={45}
            onClick={handletoggleNav}
          />
        )}
      </div>

      {isModalOpen && <MenuNav closeNav={handletoggleNav} />}
    </header>
  )
}
