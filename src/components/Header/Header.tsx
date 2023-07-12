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
    <div className="bg-yellow-bg fixed w-full flex justify-between items-center drop-shadow-lg z-10 px-4 md:px-20 py-3">
      <div className="flex items-center justify-center gap-3 md:gap-12">
        <Image
          alt=""
          src="/logo.svg"
          width={1}
          height={1}
          className="w-28 h-20" // to transform the weight and height to REM
        />
        <h1 className="md:text-2xl">Maná pão de queijo</h1>
      </div>

      <nav className="hidden md:flex items-center gap-7 mr-20">
        <Link
          href="/home"
          className={`text-lg ${
            pathname === '/home' && 'font-bold underline underline-offset-8'
          } `}
        >
          Home
        </Link>
        <a href="#" className="text-lg">
          Cardápio
        </a>
        <a href="#" className="text-lg">
          Entre em Contato
        </a>
        <Link
          href="/recipe"
          className={`text-lg ${
            pathname === '/recipe' && 'font-bold underline underline-offset-8'
          } `}
        >
          Modo de preparo
        </Link>
      </nav>

      <div className="transition-transform md:hidden ">
        {isModalOpen ? (
          <X
            size={45}
            onClick={handletoggleNav}
            className="fixed z-50 right-4 top-8 text-3xl text-dark md:hidden transition-all"
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
    </div>
  )
}
