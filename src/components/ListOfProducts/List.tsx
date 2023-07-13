import { Cards } from '../../utils/CardsContent'
import { ListOfCategory } from './ListOfCategory'

export function List() {
  console.log(Cards.map((item) => item.products))
  return (
    <div className="flex flex-col gap-28 items-center justify-center">
      {Cards.map((item) => {
        return (
          <ListOfCategory
            key={item.id}
            products={item.products}
            title={item.title}
          />
        )
      })}
    </div>
  )
}
