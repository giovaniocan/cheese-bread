import { NotesofRecipes } from '../../utils/Recipes'

export function NotesOfRecipe() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium">
        Notas
      </h1>

      {NotesofRecipes.map((note) => {
        return (
          <div key={note} className="flex flex-col gap-4">
            <div className="flex gap-5 w-fullitems-center">
              <span className="text-base md:text-lg lg:text-xl">*</span>
              <span className="text-base md:text-lg lg:text-xl">{note}</span>
            </div>
            <div className="w-full h-[0.5px] bg-black"></div>
          </div>
        )
      })}
    </div>
  )
}
