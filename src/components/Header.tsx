import Image from "next/image";

export function Header(){
    return(
        <div className="bg-yellow-bg fixed w-full flex justify-between items-center drop-shadow-lg px-20 py-3">
            <div className="flex items-center justify-center gap-12">
                <Image
                alt=""
                src="/logo.svg"
                width={1}
                height={1}
                className="w-28 h-20" // to transform the weight and height to REM
                />
                <h1 className="text-2xl">Maná pão de queijo</h1>

            </div>

            <nav className="flex items-center gap-7 mr-20">
                <a href="#" className="text-lg font-bold underline underline-offset-8">
                    Home
                </a>
                <a href="#" className="text-lg">
                Cardápio
                </a>
                <a href="#" className="text-lg">
                Modo de preparo
                </a>
                <a href="#" className="text-lg">
                Entre em Contato
                </a>
            </nav>
        </div>
    )
}