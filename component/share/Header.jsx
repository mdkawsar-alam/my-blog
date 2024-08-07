import React from 'react';
import { assets } from '@/Assets/assets';
import Image from 'next/image';

const Header = () => {
  return (
  <div className='p-5 md:px-12 lg:px-28'>
    <div className='flex justify-between items-center'>
      <Image src={assets.logo} alt='' width={180} className='w-[130px] sm:w-auto' />
      <button className='flex gap-2 font-medium py-1 px-3 sm:px-6 items-center border shadow-md rounded-lg'> <span>Get started</span> <Image src={assets.arrow} alt=''/></button>
    </div>
     <div className="text-center my-8">
      <h2 className="text-3xl md:text-5xl font-medium">Latest Blog</h2>
      <p className=' mt-10 max-w-[740px] m-auto text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A officia perspiciatis quis nam, ea incidunt in reprehenderit aliquam earum labore? Obcaecati reiciendis quam nesciunt eius est laboriosam vel consectetur temporibus?</p>
         <form  className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto shadow-md shadow-[#737070] mt-5 border border-black '>
          <input type="email" placeholder='Enter your Email ' className='pl-4 outline-none '/>
          <button type='submit ' className='border-l p-2 border-black'>Subscribe</button>

         </form>
     </div>
  </div>
  );
};

export default Header;
