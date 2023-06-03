import './App.css';
import { Footer } from './components';
import Sidebar from './components/Sidebar';
import Project from './sections/Project';
import Contact from './sections/Contact';
import About from './sections/About';
import Home from './sections/Home';
import { links } from './data/data';

function App() {
  return (
    <div
      className='flex'
    >
      <div className=''>
        <Sidebar />
        <div className='block lg:hidden fixed bottom-0 left-0 w-full p-3 bg-[#1d3452] text-gray-200 z-30'>
          <div className='flex justify-center gap-4'>
            {links.map(({ name, url, icon }, index) => (
              <div className='text-center' key={index}>
                <a href={url} className='hover:text-[#43eeb2] transition' >
                  <i className={`${icon} text-2xl text-center`} />
                  <span className='block text-[.6rem]'>{ name }</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Navbar /> */}
      {/* <Blobs /> */}
      {/* TODO: set with calc in media query */}
      <main className='relative grow' style={{ width: 'calc(100vw - 300px)' }}>
        <Home />
        <div>
          <About />
          <Project />
          <Contact />
        </div>
        {/* <Footer /> */}
        <div>
          {/* <motion.div className='bg-bubble top' animate={{x:'180%'}} transition={{ ease: 'easeInOut', duration: 6, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}></motion.div>
          <motion.di className='bg-bubble middle' animate={{left: '0%'}} transition={{ ease: 'easeInOut', duration: 6, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}></motion.di> */}
          
          {/* <motion.div className='bg-bubble top'></motion.div>
          <motion.div className='bg-bubble middle'></motion.div> */}

        </div>
        
        <div className="fixed inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 " aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#07baa5] to-[#392ddf] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
        <div className="fixed inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(70%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#43eeb2] to-[#392ddf] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
      </main>
    </div>
  );
}

export default App;
