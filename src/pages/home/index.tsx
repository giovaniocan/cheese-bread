import { Contatc } from '@/components/Contatc/Contact'
import { Header } from '@/components/Header/Header'
import { Intro } from '@/components/Intro/Intro'
import { List } from '@/components/ListOfProducts/List'

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-20">
      <Intro />
      <List />
      <Contatc />
    </div>
  )
}
