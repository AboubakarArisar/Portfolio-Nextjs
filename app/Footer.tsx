import React from "react";
import Link from "next/link";
const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <div className='w-full h-[40vh] text-black flex flex-col gap-8 p-4 justify-center items-center'>
          <div className='flex flex-col justify-center items-center gap-2 md:flex-row w-full md:gap-6 focus:text-blue-500 text-xl md:justify-evenly'>
            <Link href='/'>Home</Link>
            <Link href='/Skills'>Skills</Link>
            <Link href='/Projects'>Projects</Link>
            <Link href='/Support'>Support</Link>
            <Link href='/Contact'>Contact</Link>
          </div>
          <p className=''>© 2021 Aboubakar Arisar</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
