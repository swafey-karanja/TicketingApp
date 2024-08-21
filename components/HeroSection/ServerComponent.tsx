import Image from "next/image";
import { BsSearch } from "react-icons/bs";

export const heading1 = (
    <>
        <h1 className="font-heading mb-6">Welcome To My Ticket</h1>
        <p className='text-[#4a4a4a] dark:text-[#ffffffea] mb-12 max-w-lg'>
            Your one-stop shop for tickets to any event.
        </p>
        <div className='flex-col justify-center w-full md:flex-row flex pt-12'>
            <input
              type='search'
              placeholder='Search For an Event'
              className='bg-[#026057] h-11 md:h-16 mb-2 md:mb-0 rounded-full pl-6 md:mr-5 md:w-[452px] text-white placeholder:text-white focus:outline-none'
            />
            <button 
                type='button' 
                className='px-6 md:px-[50px] lg:px-[72px] py-2 md:py-5 bg-tertiary-light rounded-full md:rounded-full shadow-sm shadow-tertiary-light text-white font-bold text-base md:text-xl hover:scale-110 duration-300 transition-all'
            >
            <BsSearch className="text-2xl"/>
            </button>
          </div>
    </>
);

export const section2 = (
    <div className="md:grid hidden gap-8 grid-cols-1">
        <div className="rounded-2xl overflow-hidden h-48">
            <Image 
                src="/images/concert-4.jpg" 
                alt="hero-1" 
                width={300} 
                height={300} 
                className="img scale-animation"
            />
        </div>

        <div className="grid grid-cols-2 gap-8 h-48">
            <div className="rounded-2xl overflow-hidden">
                <Image 
                    src="/images/concert-5.jpg" 
                    alt="hero-2" 
                    width={300} 
                    height={300} 
                    className="img scale-animation"
                />
            </div>

            <div className="rounded-2xl overflow-hidden">
                <Image 
                    src="/images/concert-6.jpg" 
                    alt="hero-3" 
                    width={300} 
                    height={300} 
                    className="img scale-animation"
                />
            </div>
        </div>
    </div>
);