import {
  ArrowsOutLineHorizontal,
  ClockCounterClockwise,
  Thermometer,
} from 'phosphor-react'

export function PrepareRecipe() {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-full flex justify-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
          title
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-8 p-4">
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-5 w-fullitems-center">
              <span className="text-base md:text-lg lg:text-xl">{'1º'}</span>
              <span className="text-base md:text-lg lg:text-xl">
                o passo a passo da receita vai aqui
              </span>
            </div>
            <div className="w-full h-[0.5px] bg-black"></div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-5 w-fullitems-center">
              <span className="text-base md:text-lg lg:text-xl">{'1º'}</span>
              <span className="text-base md:text-lg lg:text-xl">
                o passo a passo da receita vai aqui
              </span>
            </div>
            <div className="w-full h-[0.5px] bg-black"></div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-5 w-fullitems-center">
              <span className="text-base md:text-lg lg:text-xl">{'1º'}</span>
              <span className="text-base md:text-lg lg:text-xl">
                o passo a passo da receita vai aqui
              </span>
            </div>
            <div className="w-full h-[0.5px] bg-black"></div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-5 w-fullitems-center">
              <span className="text-base md:text-lg lg:text-xl">{'1º'}</span>
              <span className="text-base md:text-lg lg:text-xl">
                o passo a passo da receita vai aqui
              </span>
            </div>
            <div className="w-full h-[0.5px] bg-black"></div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-5 w-fullitems-center">
              <span className="text-base md:text-lg lg:text-xl">{'1º'}</span>
              <span className="text-base md:text-lg lg:text-xl">
                o passo a passo da receita vai aqui
              </span>
            </div>
            <div className="w-full h-[0.5px] bg-black"></div>
          </div>
        </div>

        <div className="flex justify-between lg:flex-col">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-7 items-center justify-center">
            <div className="flex flex-col gap-1 items-center">
              <ClockCounterClockwise size={65} color="#FF0000" />
              <span className="text-xs text-center md:text-sm ">
                tempo de preparo
              </span>
            </div>
            <span className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium">
              Frase
            </span>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 md:gap-7 items-center justify-center">
            <div className="flex flex-col gap-1 items-center">
              <ArrowsOutLineHorizontal size={65} color="#FF0000" />
              <span className="text-xs text-center md:text-sm ">
                espaço entre os pães
              </span>
            </div>
            <span className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium">
              Frase
            </span>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 md:gap-7 items-center justify-center">
            <div className="flex flex-col gap-1 items-center">
              <Thermometer size={65} color="#FF0000" />
              <span className="text-xs text-center md:text-sm ">
                temperatura do forno
              </span>
            </div>
            <span className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium">
              Frase
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
