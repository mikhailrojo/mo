'use client'
import Link from 'next/link'

import plan1 from './assets/plan1.png'
import plan2 from './assets/plan2.png'
import plan3 from './assets/plan3.png'
import plan4 from './assets/plan4.png'

import Image from "next/image";
import React from "react";

const LoginSignin = () => (
  <div className="fixed top-0 right-0 p-4 flex items-center">
    <Link
      href='profile'
      className="bg-blue-500 text-white py-2 px-4 rounded-md mr-4 hover:bg-blue-600"
    >
      Login
    </Link>
    <Link
      href='registration'
      className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
    >
      Register
    </Link>
  </div>
)

export default function Home() {
  return (
    <main className="snap-mandatory snap-y h-full overflow-scroll	">
      <LoginSignin/>
      <section className='bg-red-500 h-full snap-start flex justify-center items-center'>
        <div className='mx-10'>
          <h1 className='text-5xl my-4'>Verified Reviews You Can Trust</h1>
          <p className='text-xl my-4'>Access credible tenant reviews using our secure verification system</p>
        </div>
        <Image
          src={plan1.src}
          alt='plan1'
          width={450} // Set the desired width
          height={450} // Set the desired height
          className='mx-11'
        />
      </section>
      <section className='bg-orange-300 h-full snap-start flex justify-center items-center'>
        <Image
          src={plan2.src}
          alt='plan1'
          width={450} // Set the desired width
          height={450} // Set the desired height
          className='mx-11'
        />
        <div className='mx-10'>
          <h1 className='text-5xl'>Safeguard Your Investment</h1>
          <p className='text-xl my-4'> Avoid rental risks by screening tenants through our platform before leasing
            agreements</p>
        </div>

      </section>
      <section className='bg-blue-300 h-full snap-start flex justify-center items-center'>
        <div className='mx-10'>
          <h1 className='text-6xl'>Prevent Property Damage</h1>
          <p className='text-xl my-4'>Check for tenant red flags like excessive wear and tear through detailed
            reviews</p>
        </div>
        <Image
          src={plan3.src}
          alt='plan1'
          width={450} // Set the desired width
          height={450} // Set the desired height
          className='mx-11'

        />
      </section>
      <section className='bg-green-300 h-full snap-start flex justify-center items-center'>
        <Image
          src={plan4.src}
          alt='plan4'
          width={450}
          height={450}
          className='mx-11'

        />
        <div className='mx-10'>
          <h1 className='text-5xl'>Adaptable & Scalable Platform</h1>
          <p className='text-xl my-4'>Our system works for individual landlords or large property management firms</p>
        </div>

      </section>
    </main>
  );
}
