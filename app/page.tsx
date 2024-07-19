"use client";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Reachout from "./Reachout";
import { useScroll, motion } from "framer-motion";
import "./globals.css";
import Footer from "./Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div style={{ scaleX: scrollYProgress }} />
      <div className='min-h-screen w-full bg-white flex flex-col gap-6'>
        <Navbar />
        <div className='relative w-full h-[80vh] bg-gradient-to-br from-[#1e293b] to-[#3b82f6]'>
          <div className='flex flex-col  px-5 justify-center items-center h-full w-1/2'>
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
          <div className='absolute -top-8 rounded right-8 h-[90vh] w-[30%] bg-[url(/ab.jpg)] bg-cover'></div>
        </div>
        <Skills />
        <Reachout />
        <Footer />
      </div>
    </>
  );
}
