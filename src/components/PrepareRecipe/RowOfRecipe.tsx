interface RowOfRecipeProps {
  step: string
  stepNumber: number
}

export function RowOfRecipe({ step, stepNumber }: RowOfRecipeProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-5 w-fullitems-center">
        <span className="text-base md:text-lg lg:text-xl">{stepNumber}º</span>
        <span className="text-base md:text-lg lg:text-xl">{step}</span>
      </div>
      <div className="w-full h-[0.5px] bg-black"></div>
    </div>
  )
}
