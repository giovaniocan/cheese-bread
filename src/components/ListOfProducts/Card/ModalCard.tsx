import ReactModal from 'react-modal'
import { X } from 'phosphor-react'
import Image from 'next/image'
import Link from 'next/link'
import { ProductCard } from '../ListOfCategory'
import { CardCarousel } from '@/components/Carousel/CardCarousel'

interface ModalCardProps {
  isOpen: boolean
  onRequestClose: () => void
  product: ProductCard
}

export function ModalCard({ isOpen, onRequestClose, product }: ModalCardProps) {
  function SendMessage() {
    const message = `Olá, gostaria de comprar o produto '${product.name}'.`

    const formatedMessage = encodeURIComponent(message)

    return formatedMessage
  }

  const mensagem = SendMessage()

  return (
    <ReactModal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onRequestClose}
      contentLabel="Modal of product card"
      overlayClassName="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center"
      className=" mx-10  pt-10 pb-4 px-4 relative bg-white border-1 shadow-3xl rounded-xl w-full md:w-2/3 lg:w-1/2 xl:w-1/3 lg:p-6"
    >
      <button
        onClick={onRequestClose}
        className="absolute right-2 -mt-6 lg:-mt-4 "
      >
        <X size={35} weight="bold" />
      </button>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center justify-between gap-4">
          <h2 className="font-semibold text-center px-10 -mt-5 text-lg md:text-2xl">
            {product.name}
          </h2>

          <div className="w-60 md:w-64  lg:w-72 xl:w-80 m-4 flex items-center object-center justify-center">
            {product.carouselImage ? (
              <div className="relative lg:w-5/6 2xl:w-full ">
                <CardCarousel src={[product.image, product.carouselImage]} />
              </div>
            ) : (
              <Image
                src={product.image}
                alt={product.name}
                width={1}
                height={1}
                className="w-full"
              />
            )}
          </div>
          <span className="font-light text-center text-sm  text-zinc-700">
            {product.longDescription}
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-medium text-base md:text-lg  text-gray-800">
            Não contem glúten
          </span>
          <span className="font-medium text-base md:text-lg  text-gray-800">
            Pacotes com {product.weight}
          </span>

          <Link
            href={`https://api.whatsapp.com/send?phone=4498444524&text=${mensagem}`}
            className="w-full bg-green-bg-button text-black py-2 text-sm md:text-base text-center rounded-full font-semibold uppercase"
          >
            Entre em contato e peça agora
          </Link>
        </div>
      </div>
    </ReactModal>
  )
}
