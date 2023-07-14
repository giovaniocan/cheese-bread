import { ClockCounterClockwise } from 'phosphor-react'

export function PrepareRecipe() {
  return (
    <div className="flex flex-col gap-8">
      <div className="w-full flex justify-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
          title
        </h1>
      </div>
      <div>
        <div className="flex flex-col">
          <span className="text-base md:text-lg lg:text-xl">
            modo de preparo aqui
          </span>
        </div>
        <div className="flex justify-around lg:flex-col">
          <div className="flex gap-9 items-center justify-center">
            <ClockCounterClockwise size={32} weight="fill" />
            <span className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium">
              Frase
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
