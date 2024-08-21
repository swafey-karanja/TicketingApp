import Link from "next/link"
import { BiMessageAltDetail } from "react-icons/bi"
import { BsEnvelopeAtFill, BsFacebook, BsInstagram, BsTelegram, BsTelephoneOutbound, BsTwitter, BsWhatsapp } from "react-icons/bs"

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="container mx-auto px-4">
        <Link href="/"  className="font-black text-tertiary-dark">
          My Ticket
        </Link>

        <h4 className="font-semibold text-[40px] py-6">
          Contacts
        </h4>

        <div className="flex flex-wrap gap-16 items-center justify-between">
          <div className="flex-1">
            <p>The dark forest</p>
            <div className="flex items-center py-4">
              <BsEnvelopeAtFill />
              <p className="ml-2">Dracula Airlines</p>
            </div>

            <div className="flex items-center">
              <BsTelephoneOutbound />
              <p className="ml-2">000-111-222-000</p>
            </div>

            <div className="flex items-center pt-4">
              <BiMessageAltDetail />
              <p className="ml-2">Dracula Airlines</p>
            </div>
          </div>

          <div className="flex-1 md:text-left">
            <div className="flex items-center py-2">
              <BsFacebook />
              <p className="ml-2">Facebook</p>
            </div>
            <div className="flex items-center py-2">
              <BsWhatsapp />
              <p className="ml-2">WhatsApp</p>
            </div>
            <div className="flex items-center py-2">
              <BsInstagram />
              <p className="ml-2">Instagram</p>
            </div>
            <div className="flex items-center py-2">
              <BsTwitter />
              <p className="ml-2">Twitter</p>
            </div>
            <div className="flex items-center py-2">
              <BsTelegram />
              <p className="ml-2">Telegram</p>
            </div>
          </div>

          <div className="flex-1 md:text-left">
            <p className="pb-4"> Privacy Policy</p>
            <p className="pb-4"> Terms Of Service</p>
            <p className="pb-4"> Trademarks</p>
            <p className="pb-4"> Advertising</p>
            <p> Events</p>
          </div>
        </div>
      </div>

      <div className="bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0"></div>
    </footer>
  )
}

export default Footer