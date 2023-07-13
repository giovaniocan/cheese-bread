import { ProductCard } from '../ListOfCategory'

import ReactModal from 'react-modal'
import { X } from 'phosphor-react'
import Image from 'next/image'
import Link from 'next/link'

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
      overlayClassName="fixed inset-0 flex items-center justify-center -mb-10 bg-black/80 "
      className="z-50 relative pt-10 pb-4 px-4 bg-white border-1 shadow-3xl rounded-xl  mx-4 w-full md:w-2/3 lg:w-1/3 lg:p-10 dark:bg-zinc-900 dark:border"
    >
      <button onClick={onRequestClose} className="absolute top-4 right-4">
        <X size={28} weight="bold" />
      </button>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center justify-between gap-4">
          <h2 className="font-semibold -mt-8 text-lg md:text-3xl">
            {product.name}
          </h2>
          <Image
            src={product.image}
            alt={product.name}
            width={1}
            height={1}
            className="w-64 lg:w-80"
          />
          <span className="font-light text-center text-sm md:text-base lg:text-xl text-zinc-700">
            {product.longDescription}
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <span className=" font-medium md:text-2xl text-gray-800">
            Não contem glúten
          </span>
          <span className=" font-medium md:text-2xl text-gray-800">
            Pacotes com {product.weight}
          </span>

          <Link
            href={`https://api.whatsapp.com/send?phone=44998204301&text=${mensagem}`}
            className="w-full bg-green-bg-button text-black py-4 text-base md:text-xl text-center rounded-full font-semibold uppercase"
          >
            Entre em contato e peça agora
          </Link>
        </div>
      </div>
    </ReactModal>
  )
}
