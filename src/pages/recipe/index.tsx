import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { RecipeIntro } from '@/components/Intro/RecipeIntro'
import { NotesOfRecipe } from '@/components/NotesOfRecipe'
import { PrepareRecipe } from '@/components/PrepareRecipe'

export default function Recipe() {
  return (
    <div className="flex flex-col gap-24">
      <Header />
      <div className="flex flex-col gap-24 mx-4 md:mx-20">
        <RecipeIntro />
        <PrepareRecipe />
        <NotesOfRecipe />
      </div>

      <Footer />
    </div>
  )
}
