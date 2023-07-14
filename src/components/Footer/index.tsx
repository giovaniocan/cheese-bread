import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-yellow-bg w-full bottom-0 p-2 flex flex-col items-center justify-center">
      <Link href="https://www.linkedin.com/in/giovani-ocan/">
        Copyright ©Giovani Apolinario · 2023
      </Link>
    </footer>
  )
}
