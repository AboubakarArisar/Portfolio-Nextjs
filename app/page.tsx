"use client";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Reachout from "./Reachout";
import { useFollowPointer } from "./use-follow-pointer";
import Way from "./Way";
import "./globals.css";
import Footer from "./Footer";
import { useRef } from "react";
import { motion } from "framer-motion";
export default function Home() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <>
      <motion.div
        ref={ref}
        style={{ x, y }}
        className='box fixed z-2 opacity-0 sm:opacity-80'
      ></motion.div>
      <motion.div className='min-h-screen w-full bg-white flex flex-col gap-6 main z-10'>
        <Navbar />
        <div className='relative w-full h-[80vh] bg-gradient-to-br from-[#1e293b] to-[#3b82f6]'>
          <div className='flex flex-col  px-5 justify-center items-center h-full md:w-1/2'>
            <img
              src='/pic.jpg'
              alt=''
              className='w-24 h-24 rounded-full md:hidden '
            />
            <h1 className='w-full text-center font-bold text-3xl '>
              Abou<span className='text-green-300'> Bakar</span>
            </h1>
            <h2 className='text-base text-center w-full opacity-40'>
              MERN Stack Developer
            </h2>
            <p className='text-center w-full'>
              Hi, I am Aboubakar, a passionate MERN stack developer with
              expertise in building scalable and responsive web applications. I
              specialize in MERN and Nextjs.
            </p>
            <p className='text-center w-full'>
              I am proficient in MongoDB, Express.js, React.js, Next js, and
              Node.js
            </p>
          </div>
          <div className='w-[40%] h-[90vh] absolute top-[10%] right-[10%] overflow-hidden'>
            <div className='rounded-full bg-green-400 w-[80%] h-[40vh] absolute top-[10%] left-[20%]  blur-xl animate-skew-infinite'></div>
          </div>

          <div className='absolute md:-top-8 rounded md:right-8 md:h-[90vh] md:w-[30%] bg-[url(/ab.jpg)] bg-cover'></div>
        </div>
        <Skills />
        <Way />
        <Reachout />
        <Footer />
      </motion.div>
    </>
  );
}
