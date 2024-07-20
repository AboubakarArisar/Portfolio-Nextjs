import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <header className='h-[20vh] p-6'>
      <nav className='text-black flex justify-between items-center'>
        <div>
          <ul className='flex gap-2 md:gap-6 md:text-lg'>
            <li>
              <Link href='/'>
                <h2 className='border-2 px-4 py-2 rounded-full block'>Home</h2>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <h2 className='border-2 px-4 py-2 rounded-full block relative overflow-hidden'>
                  Projects
                </h2>
              </Link>
            </li>
          </ul>
        </div>
        <div className='hidden md:block'>
          <img src='/logo.png' alt='logo' className='w-8 h-8' />
        </div>
        <div>
          <Link href='/Contact'>
            <button className='bg-blue-400 flex duration-300 py-2 md:px-4 md:py-2 rounded-full text-white font-semibold relative overflow-hidden'>
              Contact us
              <span className='text-base font-bold absolute inset-0 flex items-center justify-center transition-transform transform translate-x-0 bg-blue-500 hover:translate-x-full duration-300'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                  />
                </svg>
              </span>
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
