import {
  ArrowsOutLineHorizontal,
  ClockCounterClockwise,
  Thermometer,
} from 'phosphor-react'
import { RowOfRecipe } from './RowOfRecipe'

interface RecipeModel {
  title: string
  timeOfPreparation: string
  distance: string
  temperature: string
  steps: string[]
}

interface EachRecipeProps {
  recipe: RecipeModel
}

export function EachRecipe({ recipe }: EachRecipeProps) {
  return (
    <div>
      <div className="w-full flex justify-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
          {recipe.title}
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-8 p-4">
        <div className="flex flex-1 flex-col gap-4">
          {recipe.steps.map((step, index) => {
            return (
              <RowOfRecipe step={step} key={index} stepNumber={index + 1} />
            )
          })}
        </div>

        <div className="flex justify-between lg:flex-col">
          <div className="flex flex-col lg:flex-row lg:justify-start md:gap-7 items-center  justify-center">
            <div className="flex flex-col gap-1 items-center">
              <ClockCounterClockwise size={65} color="#FF0000" />
              <span className="text-xs text-center md:text-sm ">
                Tempo para preparo
              </span>
            </div>
            <span className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium">
              {recipe.timeOfPreparation}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-start md:gap-7 items-center  justify-center">
            <div className="flex flex-col gap-1 items-center">
              <ArrowsOutLineHorizontal size={65} color="#FF0000" />
              <span className="text-xs text-center md:text-sm ">
                Espaço entre os pães
              </span>
            </div>
            <span className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium">
              {recipe.distance}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-start  md:gap-7 items-center  justify-center">
            <div className="flex flex-col gap-1 items-center">
              <Thermometer size={65} color="#FF0000" />
              <span className="text-xs text-center md:text-sm ">
                temperatura do forno
              </span>
            </div>
            <span className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium">
              {recipe.temperature}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
