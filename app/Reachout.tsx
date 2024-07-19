import exp from "constants";

const Reachout: React.FC = () => {
  return (
    <>
      <div className='h-[70vh] p-6 w-full bg-gradient-to-br from-[#1e293b] to-[#3b82f6] flex justify-between items-center '>
        <div className='w-[50%] flex justify-center items-center h-full '>
          <div className='flex flex-col  w-full  gap-6'>
            <h1 className='font-semibold text-xl w-full text-center'>
              Get in Touch with Abou Bakar
            </h1>
            <h1 className='font-bold text-6xl w-full text-center'>
              Intrested in a Collaboration?
            </h1>
          </div>
        </div>

        <div className='w-[50%] flex flex-col gap-6 justify-center'>
          <div className='flex flex-col gap-4'>
            <h6 className='text-gray-300 font-semibold opacity-60'>
              SEND A MESSAGE
            </h6>
            <span className='text-base hover:underline cursor-pointer'>
              aboubakar.arisarsahab@gmail.com
            </span>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='text-gray-300 font-semibold opacity-60'>
              Follow us
            </h1>
            <div className='grid grid-cols-3'>
              <a href='https://github.com/AboubakarArisar' target='_blank'>
                Github
              </a>
              <a href='https://github.com/AboubakarArisar' target='_blank'>
                Instagram
              </a>
              <a href='https://youtube.com/@pindaricoders' target='_blank'>
                Youtube
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Reachout;
