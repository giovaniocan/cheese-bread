import { Header } from '@/components/Header/Header'
import { Intro } from '@/components/Intro/Intro'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Intro />
    </div>
  )
}
