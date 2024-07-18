import { motion } from 'framer-motion';
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

const Home = () => {
  return (
    <section className="relative w-full h-screen mx-auto fixed">
      <div className={`${styles.paddingX} absolute inset-0 top-[20px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h4 className="font-semibold lg:leading-normal leading-relaxed text-4xl lg:text-4xl text-white">
            Extrnl.io <span className='text-xl font-medium'><br />An International software development company</span>
            <br /> <span className="text-indigo-600">  
            Turning<span className='pl-1'>Visions</span> into Code</span>
          </h4>
          <p className="text-slate-400 text-lg max-w-2xl mt-[1px] md:mt-32 lg:mt-3 leading-[30px] p-[1px] md:p-0">
            "Expert software developers with a passion for creating commercially viable Blockchain products."
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10  w-full flex justify-center items-center">
        <a href="#about">
          {/* <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2">
            <motion.div 
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div> */}
        </a>
      </div>
    </section>
  )
}

export default SectionWrapper(Home, 'home')
