import React from "react";

const Skills: React.FC = () => {
  return (
    <div className='p-6 mt-8 text-black flex flex-col gap-6'>
      <h1 className='w-full text-center text-3xl font-bold'>
        Core Development Skills
      </h1>
      <h5 className='text-center text-base opacity-70 w-full py-4'>
        Showcasing expertise in various programming languages and frameworks.
      </h5>
      <div className='grid grid-cols-1 gap-4 place-items-center md:grid-cols-3  md:p-4 w-full'>
        <div className='flex flex-col gap-4 justify-center items-center w-[80%]'>
          <h1 className='font-bold text-xl'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5'
              />
            </svg>
          </h1>
          <h1 className='font-bold text-xl'>Web 2.0</h1>
          <p className='text-center opacity-70'>
            Building responsive and dynamic web applications.
          </p>
        </div>
        <div className='flex flex-col gap-4 justify-center items-center w-[80%]'>
          <h1 className='font-bold text-xl'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z'
              />
            </svg>
          </h1>
          <h1 className='font-bold text-xl'>Backend Developer</h1>
          <p className='text-center opacity-70'>
            Creating robust and scalable server-side solutions.
          </p>
        </div>
        <div className='flex flex-col gap-4 justify-center items-center w-[80%]'>
          <h1 className='font-bold text-xl'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125'
              />
            </svg>
          </h1>
          <h1 className='font-bold text-xl'>Database Managment</h1>
          <p className='text-center opacity-70'>
            Efficiently managing and organizing data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
