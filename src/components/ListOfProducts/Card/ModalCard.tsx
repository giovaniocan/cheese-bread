import { on } from 'events'
import { ProductCard } from '../ListOfCategory'

import ReactModal from 'react-modal'

interface ModalCardProps {
  isOpen: boolean
  onRequestClose: () => void
  product: ProductCard
}

export function ModalCard({ isOpen, onRequestClose, product }: ModalCardProps) {
  const { image, longDescription, name, weight } = product
  return (
    <ReactModal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onRequestClose}
      contentLabel="Modal of product card"
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black/80 "
      className=" z-50 p-8 bg-white border-2  border-green-500 rounded-lg  mx-4 w-full lg:w-5/12 lg:p-10 dark:bg-zinc-900 dark:border"
    >
      <h1 onClick={onRequestClose} className="cursor-pointer">
        teoricamente deve funcionar
      </h1>
    </ReactModal>
  )
}
