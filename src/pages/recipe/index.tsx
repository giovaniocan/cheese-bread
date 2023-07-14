import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { RecipeIntro } from '@/components/Intro/RecipeIntro'

export default function Recipe() {
  return (
    <div className="flex flex-col gap-24">
      <Header />
      <RecipeIntro />
    </div>
  )
}
