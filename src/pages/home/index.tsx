import { Contatc } from '@/components/Contatc/Contact'
import { Header } from '@/components/Header/Header'
import { Intro } from '@/components/Intro/Intro'
import { List } from '@/components/ListOfProducts/List'

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <Header />
      <Intro />
      <List />
      <Contatc />
    </div>
  )
}
