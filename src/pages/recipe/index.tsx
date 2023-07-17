import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { RecipeIntro } from '@/components/Intro/RecipeIntro'
import { NotesOfRecipe } from '@/components/NotesOfRecipe'
import { PrepareRecipe } from '@/components/PrepareRecipe'
import { NextSeo } from 'next-seo'

export default function Recipe() {
  return (
    <>
      <NextSeo
        title="Maná pão de queijo | Receita"
        noindex
        description="Descubra o sabor autêntico e irresistível do pão de queijo e chipa Maná em cada mordida."
        openGraph={{
          url: 'https://manapãodequeijo.com.br/',
          title: 'Maná pão de queijo',
          description:
            'Descubra o sabor autêntico e irresistível do pão de queijo e chipa Maná em cada mordida.',
          siteName: 'Maná Pão de Queijo',
          locale: 'pt-Br',
          images: [
            {
              url: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fp2.trrsf.com%2Fimage%2Ffget%2Fcf%2F942%2F530%2Fimages.terra.com%2F2022%2F07%2F01%2F31650768-shutterstock1268210182-768x575.jpg&tbnid=bQchEPoYXs_pwM&vet=12ahUKEwibvYaFyJaAAxXZFrkGHcxsCcIQMygJegUIARCdAg..i&imgrefurl=https%3A%2F%2Fwww.terra.com.br%2Fvida-e-estilo%2Fdegusta%2Freceitas%2Fpao-de-queijo-mineiro%2C61750a25002291f457b3d451709f023f0fx6b0rx.html&docid=x2t0NIJPKsUa1M&w=942&h=530&q=pao%20de%20queijo&ved=2ahUKEwibvYaFyJaAAxXZFrkGHcxsCcIQMygJegUIARCdAg',
              width: 300,
              height: 260,
              alt: 'Pão de queijo image',
            },
          ],
        }}
      />
      <div className="flex flex-col gap-24">
        <Header />
        <div className="flex flex-col gap-24 mx-4 md:mx-20">
          <RecipeIntro />
          <PrepareRecipe />
          <NotesOfRecipe />
        </div>

        <Footer />
      </div>
    </>
  )
}
