import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-yellow-bg w-full flex flex-col justify-center">
      <div className="flex justify-center p-5">
        <div className=" flex w-full items-center gap-4 flex-wrap lg:justify-around lg:mx-40">
          <div className="flex gap-4 items-center">
            <Image
              src="/ContactIcons/WhatsIcon.svg"
              width={38}
              height={50}
              alt="whatsApp icon"
            />

            <h2 className=" ">(44) 9 9844-4524</h2>
          </div>

          <div className="flex gap-4 items-center">
            <Image
              src="/ContactIcons/gmailIcon.svg"
              width={38}
              height={50}
              alt="Gmail icon"
            />
            <h2 className=" ">paodequeijomana98@gmail.com</h2>
          </div>

          <div className="flex gap-4 items-center">
            <Image
              src="/ContactIcons/MapsIcon.svg"
              width={40}
              height={50}
              alt="Maps icon"
            />
            <div className="flex flex-col">
              <h2 className="">
                Avenida Fortaleza, 98, Bairro: Por do Sol - Moreira Sales - PR
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <span>Copyright ©Giovani Apolinario · 2023</span>
      </div>
    </footer>
  )
}
