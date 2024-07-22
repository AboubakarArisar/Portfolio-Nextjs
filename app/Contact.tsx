const Contact: React.FC = () => {
  return (
    <>
      <div className='flex flex-col'>
        <div className='flex flex-col sm:flex-row justify-between w-full sm:h-[70vh]'>
          <div className='w-full sm:w-1/2 h-full'>
            <img
              className='w-full h-full bg-cover'
              src='https://images.unsplash.com/photo-1580983218547-8333cb1d76b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg5OTcwMTF8&ixlib=rb-4.0.3&q=80&w=1920'
              alt=''
            />
          </div>
          <div className='w-full sm:w-1/2 h-full bg-gradient-to-br from-[#1e293b] to-[#3b82f6] '>
            <div className='flex flex-col justify-center w-[80%] gap-4 h-full p-4 sm:pl-36'>
              <h1 className='text-blue-300 font-bold '>
                Let's build something great?
              </h1>
              <h1 className='text-white font-bold text-3xl'>
                Ready to Collaborate.
              </h1>
              <p>
                Let's work together to bring your ideas to life. Contact me to
                discuss your project.
              </p>
              <button className='bg-blue-500 px-4 py-3 hover:bg-blue-400 z-40 rounded font-bold text-white w-32'>
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
