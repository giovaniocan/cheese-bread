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
      <h1 className="text-5xl font-semibold">{title}</h1>
      <div className=" flex gap-20 justify-between">
        {products.map((product) => {
          return (
            <Card
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              shortDescription={product.shortDescription}
              longDescription={product.longDescription}
              weight={product.weight}
            />
          )
        })}
      </div>
    </div>
  )
}
