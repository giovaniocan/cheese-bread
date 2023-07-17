import Image from 'next/image'
import { Phone } from 'phosphor-react'

export function Contatc() {
  return (
    <div id="contact" className="ml-6 md:ml-48 flex flex-col gap-24 ">
      <div className="flex  gap-6 items-center">
        <Phone size={60} weight="bold" />
        <h1 className="text-xl md:text-2xl lg:text-5xl font-semibold">
          Contato
        </h1>
      </div>
      <div className="mr-3 flex items-center gap-4 flex-wrap lg:justify-around">
        <div className="flex gap-4">
          <Image
            src="/ContactIcons/WhatsIcon.svg"
            width={50}
            height={70}
            alt="whatsApp icon"
          />
          <div>
            <h2 className=" md:text-2xl">(44) 9 9844-4524</h2>
            <h2 className=" md:text-2xl">(44) 9 9747-3814</h2>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <Image
            src="/ContactIcons/gmailIcon.svg"
            width={50}
            height={70}
            alt="Gmail icon"
          />
          <h2 className=" md:text-2xl">paodequeijomana98@gmail.com</h2>
        </div>

        <div className="flex gap-4 items-center">
          <Image
            src="/ContactIcons/MapsIcon.svg"
            width={70}
            height={70}
            alt="Maps icon"
          />
          <div className="flex flex-col">
            <h2 className=" md:text-xl">
              Avenida Fortaleza, 98, Bairro: Por do Sol - Moreira Sales - PR
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}
