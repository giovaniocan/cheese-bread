import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'phosphor-react'

interface Slide {
  id: number
  src: string
  alt: string
  caption?: string
}

interface SimpleCarouselProps {
  src: string[]
}

export function CardCarousel({ src }: SimpleCarouselProps) {
  const slides: Slide[] = src.map((src, index) => {
    return { id: index + 1, src, alt: `Slide ${index + 1}` }
  })

  return (
    <Carousel
      transitionTime={1000}
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      stopOnHover
      swipeable
      className="w-full mx-auto"
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="absolute z-10 left-0 top-2/3 transform -translate-y-1/2 translate-x-2  p-2 bg-white rounded-full text-black  focus:outline-none"
          >
            {<ArrowLeft size={25} weight="bold" />}
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="absolute z-10 right-0 top-2/3 transform -translate-y-1/2 translate-x-2  p-2 bg-white rounded-full text-black  focus:outline-none"
          >
            {<ArrowRight size={25} weight="bold" />}
          </button>
        )
      }
    >
      {slides.map((slide) => (
        <div
          key={slide.id}
          className="carousel-slide flex justify-center items-center lg:h-5/6 flex-col"
        >
          <Image src={slide.src} alt={slide.alt} className=" object-contain " />
          {slide.caption && (
            <p className="mt-4 text-xl font-bold">{slide.caption}</p>
          )}
        </div>
      ))}
    </Carousel>
  )
}
