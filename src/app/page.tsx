'use client'
import Link from 'next/link'

import Image from "next/image";

export default function Home() {
  return (
    <main className=" snap-mandatory snap-y	 h-full">
      <section className='bg-red-500 h-full snap-start flex justify-center items-center'>
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
        <h1 className='text-4xl'>Real feedback on tenants</h1>
      </section>
      <section className='bg-orange-300 h-full snap-start flex justify-center items-center'>
        <h1 className='text-4xl'>How it works</h1>
      </section>
      <section className='bg-blue-300 h-full snap-start flex justify-center items-center'>
        <h1 className='text-4xl'>Piu piu</h1>
      </section>
      <section className='bg-green-300 h-full snap-start'> 4</section>
    </main>
  );
}
