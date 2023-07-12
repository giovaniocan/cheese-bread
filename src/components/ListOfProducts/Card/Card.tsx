import Image from 'next/image'
import { ProductCard } from '../ListOfCategory'

interface CardProps {
  product: ProductCard
}

export function Card({ product }: CardProps) {
  return (
    <div className="bg-slate-50 w-72 flex flex-col justify-between gap-4 px-7 pb-4 border rounded-3xl shadow-3xl">
      <Image
        src={product.image}
        alt={product.name}
        width={1}
        height={1}
        className="w-64 h-72"
      />
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold -mt-8 text-2xl">{product.name}</h2>
        <span className="font-light text-center text-sm text-zinc-700">
          {product.shortDescription}
        </span>
        <span className="flex items-center ml-5 gap-1 font-light text-xl">
          <h3 className="font-normal text-xl">Peso:</h3>
          {product.weight}
        </span>

        <button className="w-full bg-red-bg-button text-white py-2 rounded-full font-medium uppercase">
          saiba mais
        </button>
      </div>
    </div>
  )
}
