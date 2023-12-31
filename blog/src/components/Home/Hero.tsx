import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import pikachu from '../../../public/hello-pikachu.gif';

export default function Hero() {
  return (
    <>
      <Image
        src={pikachu}
        alt='pikachu'
        className='mt-8 mb-4 rounded-full'
        width={350}
        height={350}
        priority
      />
      <h2 className='text-2xl font-bold'>{"Hi I'm Byeong Min"}</h2>
      <h3 className='text-xl font-medium'>Front-end Enginner</h3>
      <Link href='/contact'>
        <button className='px-4 py-1.5 mt-4 font-semibold rounded-3xl bg-orange-400'>
          Contact Me!
        </button>
      </Link>
    </>
  );
}
