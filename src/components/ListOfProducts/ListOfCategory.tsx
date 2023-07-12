import { Card } from './Card/Card'

export interface ProductCard {
  id: number
  name: string
  image: string
  shortDescription: string
  longDescription: string
  weight: string
}

interface ListOfCategoryProps {
  title: string
  products: ProductCard[]
}

export function ListOfCategory({ products, title }: ListOfCategoryProps) {
  return (
    <div className="flex flex-col gap-16 text-center">
      <h1 className="text-3xl lg:text-5xl font-semibold">{title}</h1>
      <div className="flex flex-wrap items-center justify-center  md:flex-row gap-20 ">
        {products.map((product) => {
          return <Card key={product.id} product={product} />
        })}
      </div>
    </div>
  )
}
