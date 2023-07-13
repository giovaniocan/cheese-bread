import { IntroCarousel } from '../Carousel/IntroCarousel'

export function Intro() {
  const photos = ['carousel1.jpg', 'carousel2.jpg']
  return (
    <div className="mt-36 px-10   w-full flex flex-col-reverse items-center  lg:flex-row justify-around gap-8 font-semibold  ">
      <div className="flex text-center md:m-10   text-2xl md:text-3xl  xl:text-6xl">
        <h2>
          Descubra o sabor autêntico e irresistível do{' '}
          <span className="text-yellow-400">pão de queijo</span> em cada
          mordida.
        </h2>
      </div>

      <div className="mx-1 md:3/5 lg:w-2/3 lg:m-0 md:m-10 ">
        <IntroCarousel src={photos} />
      </div>
    </div>
  )
}
