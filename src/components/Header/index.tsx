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

  const isFirstPage = pathname === '/home' || pathname === '/'

  return (
    <header className="bg-yellow-bg z-0 fixed w-screen flex justify-between items-center drop-shadow-lg px-2 lg:px-1 xl:px-20 py-3">
      <div className="flex items-center justify-center gap-3 md:gap-12">
        <Image
          alt=""
          src="/logo.svg"
          width={120}
          height={80}
          className="w-24 h-16"
        />
        <h1 className="text-base md:text-xl lg:text-2xl">Maná pão de queijo</h1>
      </div>

      <nav className="hidden lg:flex items-center gap-7 mr-20">
        <Link
          href="/home"
          className={`lg:text-xl  ${
            pathname === '/home' || pathname === '/'
              ? 'font-bold underline underline-offset-8'
              : 'relative group'
          }`}
        >
          Home
          <span className="absolute -bottom-1 left-1/2 w-0 h-[calc(4px-2px)] bg-black group-hover:w-1/2 group-hover:transition-all duration-500"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-[calc(4px-2px)] bg-black group-hover:w-1/2 group-hover:transition-all duration-500"></span>
        </Link>
        {isFirstPage ? (
          <>
            <a href="#menu" className="lg:text-xl relative group ">
              Cardápio
              <span className="absolute -bottom-1 left-1/2 w-0 h-[calc(4px-2px)] bg-black group-hover:w-1/2 group-hover:transition-all duration-500"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 h-[calc(4px-2px)] bg-black group-hover:w-1/2 group-hover:transition-all duration-500"></span>
            </a>
            <a href="#contact" className="lg:text-xl relative group ">
              Entre em Contato
              <span className="absolute -bottom-1 left-1/2 w-0 h-[calc(4px-2px)] bg-black group-hover:w-1/2 group-hover:transition-all duration-500"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 h-[calc(4px-2px)] bg-black group-hover:w-1/2 group-hover:transition-all duration-500"></span>
            </a>
          </>
        ) : (
          <>
            <Link href="/#menu" className="lg:text-xl relative group ">
              Cardápio
              <span className="absolute -bottom-1 left-1/2 w-0 h-[calc(4px-2px)] bg-black group-hover:w-1/2 group-hover:transition-all duration-500"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 h-[calc(4px-2px)] bg-black group-hover:w-1/2 group-hover:transition-all duration-500"></span>
            </Link>
            <Link href="/#contact" className="lg:text-xl relative group ">
              Entre em Contato
              <span className="absolute -bottom-1 left-1/2 w-0 h-[calc(4px-2px)] bg-black group-hover:w-1/2 group-hover:transition-all duration-500"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 h-[calc(4px-2px)] bg-black group-hover:w-1/2 group-hover:transition-all duration-500"></span>
            </Link>
          </>
        )}
        <Link
          href="/recipe"
          className={`lg:text-xl  ${
            pathname === '/recipe'
              ? 'font-bold underline underline-offset-8'
              : 'relative group'
          }`}
        >
          Modo de preparo
          <span className="absolute -bottom-1 left-1/2 w-0 h-[calc(4px-2px)] bg-black group-hover:w-1/2 group-hover:transition-all duration-500"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-[calc(4px-2px)] bg-black group-hover:w-1/2 group-hover:transition-all duration-500"></span>
        </Link>
      </nav>

      <div className="transition-transform lg:hidden">
        {isModalOpen ? (
          <X
            size={45}
            onClick={handletoggleNav}
            className="fixed z-50 right-2 top-6 text-3xl text-dark lg:hidden transition-all"
          />
        ) : (
          <List size={45} onClick={handletoggleNav} />
        )}
      </div>

      {isModalOpen && <MenuNav closeNav={handletoggleNav} />}
    </header>
  )
}
