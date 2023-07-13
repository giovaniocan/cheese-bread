import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

interface Slide {
  id: number
  src: string
  alt: string
  caption?: string
}

interface SimpleCarouselProps {
  src: string[]
}

export function SimpleCarousel({ src }: SimpleCarouselProps) {
  const slides: Slide[] = [
    { id: 1, src: 'carousel1.jpg', alt: 'Slide 1' },
    { id: 2, src: 'carousel2.jpg', alt: 'Slide 2' },
  ]

  return (
    <Carousel
      autoPlay
      interval={10000}
      transitionTime={1000}
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      stopOnHover
      swipeable
      className="max-w-800 mx-auto"
    >
      {slides.map((slide) => (
        <div
          key={slide.id}
          className="carousel-slide bg-gray-200 flex justify-center items-center flex-col "
        >
          <img
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
