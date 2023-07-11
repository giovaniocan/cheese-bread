import { SimpleCarousel } from './Carousel'

export function Intro() {
  return (
    <div className="mt-36 px-10   w-full flex flex-col-reverse items-center  md:flex-row justify-around gap-8 font-semibold  ">
      <div className="text-2xl flex text-center  md:w-1/2 md:text-6xl">
        <h2>
          Descubra o sabor autêntico e irresistível do{' '}
          <span className="text-yellow-400">pão de queijo</span> em cada
          mordida.
        </h2>
      </div>

      <div className=" md:w-1/3">
        <SimpleCarousel />
      </div>
    </div>
  )
}
