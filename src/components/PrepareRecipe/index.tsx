import { Recipes } from '../../utils/Recipes'
import { EachRecipe } from './EachRecipe'

export function PrepareRecipe() {
  return (
    <div className="flex flex-col gap-6">
      {Recipes.map((recipe) => {
        return <EachRecipe recipe={recipe} key={recipe.id} />
      })}
    </div>
  )
}
