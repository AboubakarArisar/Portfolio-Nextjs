import "./globals.css";
const Way: React.FC = () => {
  return (
    <>
      <div className='w-full min-h-[50vh] text-black '>
        <h1 className='w-full text-center text-3xl font-semibold text-black'>
          My Development Process
        </h1>
        <div className='flex flex-col p-4  text-blue-900'>
          <div className='relative overflow-hidden element w-full border-b-2 p-4'>
            <div className='absolute  overlay left-0 -top-full w-full h-full bg-orange-400'></div>
            <h1 className='text-3xl md:text-5xl font-bold heading cursor-pointer flex items-center justify-between'>
              Idea & Planning
              <span className='text-5xl font-bold'>
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
                    d='M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18'
                  />
                </svg>
              </span>
            </h1>
          </div>
          <div className='relative overflow-hidden element w-full border-b-2 p-4'>
            <div className='absolute  overlay left-0 -top-full w-full h-full bg-orange-400'></div>
            <h1 className='text-3xl md:text-5xl font-bold heading cursor-pointer flex items-center justify-between'>
              Design & Prototyping
              <span className='text-5xl font-bold'>
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
                    d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
                  />
                </svg>
              </span>
            </h1>
          </div>
          <div className='relative overflow-hidden element w-full border-b-2 p-4'>
            <div className='absolute  overlay left-0 -top-full w-full h-full bg-orange-400'></div>
            <h1 className='text-3xl md:text-5xl font-bold heading cursor-pointer flex items-center justify-between'>
              Development
              <span className='text-5xl font-bold'>
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
                    d='M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z'
                  />
                </svg>
              </span>
            </h1>
          </div>
          <div className='relative overflow-hidden element w-full border-b-2 p-4'>
            <div className='absolute  overlay left-0 -top-full w-full h-full bg-orange-400'></div>
            <h1 className='text-3xl md:text-5xl font-bold heading cursor-pointer flex items-center justify-between'>
              Testing & Deployment
              <span className='text-5xl font-bold'>
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
                    d='M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418'
                  />
                </svg>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default Way;
