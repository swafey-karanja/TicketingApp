import Link from 'next/link';
import React, { FC } from 'react';
import Image from 'next/image';

const Gallery: FC<{showButton: boolean}> = ({ showButton }) => {
  return (
    <>
      <div className='flex mx-auto container'>
        <h3 className='font-semibold text-black dark:text-white md:font-semibold md:text-5xl text-3xl w-full md:w-2/3'>Upcoming Events</h3>
      </div>
      <div className='mx-auto container py-8 h-full'>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {/* Event 1 */}
          <div className='w-full p-2'>
            <div className='relative h-72 bg-gray-300'>
              {/* Date section */}
              <div className='absolute top-0 left-0 bg-black bg-opacity-50 text-white px-2 py-1 text-sm z-50'>
                Aug 25, 2024
              </div>
              {/* Image */}
              <div className="overflow-hidden h-48">
                <Image 
                  src="/images/concert-1.jpg" 
                  alt="Concert 1" 
                  layout="fill" 
                  objectFit="cover" 
                  className="img"
                />
              </div>
              {/* Event details */}
              <div className='absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2 flex justify-between items-center'>
                <div>
                  <p className='font-bold text-black'>Concert Night</p>
                  <p className='text-gray-700'>New York, NY</p>
                </div>
                <button className='bg-tertiary-dark text-white px-3 py-1 rounded-md font-bold'>
                  Buy Tickets
                </button>
              </div>
            </div>
          </div>

          <div className='w-full p-2'>
            <div className='relative h-72 bg-gray-300'>
              {/* Date section */}
              <div className='absolute top-0 left-0 bg-black bg-opacity-50 text-white px-2 py-1 text-sm z-50'>
                Aug 25, 2024
              </div>
              {/* Image */}
              <div className="overflow-hidden h-48">
                <Image 
                  src="/images/concert-2.jpg" 
                  alt="Concert 1" 
                  layout="fill" 
                  objectFit="cover" 
                  className="img"
                />
              </div>
              {/* Event details */}
              <div className='absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2 flex justify-between items-center'>
                <div>
                  <p className='font-bold text-black'>Concert Night</p>
                  <p className='text-gray-700'>New York, NY</p>
                </div>
                <button className='bg-tertiary-dark text-white px-3 py-1 rounded-md font-bold'>
                  Buy Tickets
                </button>
              </div>
            </div>
          </div>

          <div className='w-full p-2'>
            <div className='relative h-72 bg-gray-300'>
              {/* Date section */}
              <div className='absolute top-0 left-0 bg-black bg-opacity-50 text-white px-2 py-1 text-sm z-50'>
                Aug 25, 2024
              </div>
              {/* Image */}
              <div className="overflow-hidden h-48">
                <Image 
                  src="/images/concert-3.jpg" 
                  alt="Concert 1" 
                  layout="fill" 
                  objectFit="cover" 
                  className="img"
                />
              </div>
              {/* Event details */}
              <div className='absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2 flex justify-between items-center'>
                <div>
                  <p className='font-bold text-black'>Concert Night</p>
                  <p className='text-gray-700'>New York, NY</p>
                </div>
                <button className='bg-tertiary-dark text-white px-3 py-1 rounded-md font-bold'>
                  Buy Tickets
                </button>
              </div>
            </div>
          </div>

          <div className='w-full p-2'>
            <div className='relative h-72 bg-gray-300'>
              {/* Date section */}
              <div className='absolute top-0 left-0 bg-black bg-opacity-50 text-white px-2 py-1 text-sm z-50'>
                Aug 25, 2024
              </div>
              {/* Image */}
              <div className="overflow-hidden h-48">
                <Image 
                  src="/images/concert-4.jpg" 
                  alt="Concert 1" 
                  layout="fill" 
                  objectFit="cover" 
                  className="img"
                />
              </div>
              {/* Event details */}
              <div className='absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2 flex justify-between items-center'>
                <div>
                  <p className='font-bold text-black'>Concert Night</p>
                  <p className='text-gray-700'>New York, NY</p>
                </div>
                <button className='bg-tertiary-dark text-white px-3 py-1 rounded-md font-bold'>
                  Buy Tickets
                </button>
              </div>
            </div>
          </div>

          <div className='w-full p-2'>
            <div className='relative h-72 bg-gray-300'>
              {/* Date section */}
              <div className='absolute top-0 left-0 bg-black bg-opacity-50 text-white px-2 py-1 text-sm z-50'>
                Aug 25, 2024
              </div>
              {/* Image */}
              <div className="overflow-hidden h-48">
                <Image 
                  src="/images/concert-5.jpg" 
                  alt="Concert 1" 
                  layout="fill" 
                  objectFit="cover" 
                  className="img"
                />
              </div>
              {/* Event details */}
              <div className='absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2 flex justify-between items-center'>
                <div>
                  <p className='font-bold text-black'>Concert Night</p>
                  <p className='text-gray-700'>New York, NY</p>
                </div>
                <button className='bg-tertiary-dark text-white px-3 py-1 rounded-md font-bold'>
                  Buy Tickets
                </button>
              </div>
            </div>
          </div>

          <div className='w-full p-2'>
            <div className='relative h-72 bg-gray-300'>
              {/* Date section */}
              <div className='absolute top-0 left-0 bg-black bg-opacity-50 text-white px-2 py-1 text-sm z-50'>
                Aug 25, 2024
              </div>
              {/* Image */}
              <div className="overflow-hidden h-48">
                <Image 
                  src="/images/concert-6.jpg" 
                  alt="Concert 1" 
                  layout="fill" 
                  objectFit="cover" 
                  className="img"
                />
              </div>
              {/* Event details */}
              <div className='absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2 flex justify-between items-center'>
                <div>
                  <p className='font-bold text-black'>Concert Night</p>
                  <p className='text-gray-700'>New York, NY</p>
                </div>
                <button className='bg-tertiary-dark text-white px-3 py-1 rounded-md font-bold'>
                  Buy Tickets
                </button>
              </div>
            </div>
          </div>
          {/* Repeat similar structure for other events */}
        </div>
        {showButton && 
          <div className='mt-8 w-full flex justify-end'>
            <Link 
              href='/events/'
              className="border h-fit text-center border-tertiary-dark text-tertiary-dark px-1 py-1 lg:py-3 lg:px-4 rounded-xl font-bold lg:text-xl"
            >
              View all Upcoming Events
            </Link>
          </div>
        }
      </div>
    </>
  );
};

export default Gallery;
