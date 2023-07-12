import { Contatc } from '@/components/Contatc'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Intro } from '@/components/Intro'
import { List } from '@/components/ListOfProducts/List'

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <Header />
      <Intro />
      <List />
      <Contatc />
      <Footer />
    </div>
  )
}
