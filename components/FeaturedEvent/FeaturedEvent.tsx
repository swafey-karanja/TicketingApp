

import Image from "next/image";
import Link from "next/link";

const FeaturedRoom = () => {

  return (
    <section className="flex md:flex-row flex-col px-4 py-10 items-center gap-12 container mx-auto">
      <div className="md:grid gap-8 grid-cols-1 w-2/3">
        <div className="rounded-2xl overflow-hidden h-48 mb-4 md:mb-0">
          <Image 
            src='/images/concert-2.jpg' 
            alt=''
            width={300}
            height={300}
            className="img scale-animation"
          />
        </div>
        <div className="grid grid-cols-2 gap-8 h-48">
          
            <div className="rounded-2xl overflow-hidden">
              <Image 
                src='/images/concert-1.jpg'
                alt=''
                width={300}
                height={300}
                className="img scale-animation"
              />
            </div>

            <div className="rounded-2xl overflow-hidden">
              <Image 
                src='/images/concert-3.jpg'
                alt=''
                width={300}
                height={300}
                className="img scale-animation"
              />
            </div>
        </div>
      </div>

      <div className="md:py-10 md:w-1/2 text-left">
          <h3 className="md:font-semibold md:text-5xl text-3xl mb-6" >Featured Event</h3>

          <h4 className="text-tertiary-dark text-xl lg:text-4xl mb-4 font-bold">Soul Night</h4>
          <p className="flex flex-col font-normal max-w-md">
            <span className="text-tertiary-dark font-bold">Performer</span>Sauti Sol
            <span className="text-tertiary-dark font-bold">Date:</span> 2024-10-16
            <span className="text-tertiary-dark font-bold">Time:</span> 20:00
            <span className="text-tertiary-dark font-bold">Location:</span> 123 Main St
          </p>

          <div className="flex flex-col md:flex-row md:items-end justify-between mt-5">
            <div className="flex mb-3 md:mb-0">
              <div className="flex gap-3 flex-col items-center justify-center mr-4">
                <p className="text-xs lg:text-2xl text-left text-tertiary-dark">Ticket Price</p>
                <p className="md:font-bold flex font-medium text-lg xl:text-3xl">
                  $200
                </p>
              </div>

              <div className="flex gap-3 flex-col items-center justify-center mr-4 ml-5">
                <p className="text-xs lg:text-2xl text-left text-tertiary-dark">Discount</p>
                <p className="md:font-bold flex font-medium text-lg xl:text-3xl">
                  10%
                </p>
              </div>
            </div>
            <Link 
              href='/events/'
              className="border h-fit text-center border-tertiary-dark text-tertiary-dark px-3 py-2 lg:py-5 lg:px-7 rounded-2xl font-bold lg:text-xl"
            >
            More Details
          </Link>
          </div>
      </div>
    </section>
  )
}

export default FeaturedRoom;