import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'

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
      className="max-w-800 z-20 mx-auto"
    >
      {slides.map((slide) => (
        <div
          key={slide.id}
          className="carousel-slide flex justify-center items-center flex-col "
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            className="max-h-300 object-contain"
          />
          {slide.caption && (
            <p className="mt-4 text-xl font-bold">{slide.caption}</p>
          )}
        </div>
      ))}
    </Carousel>
  )
}
