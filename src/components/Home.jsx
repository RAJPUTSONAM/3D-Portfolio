import { motion } from 'framer-motion';

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";


const Home = () => {
  return (
    <section className="relative w-full h-screen mx-auto fixed">
      <div className={`${styles.paddingX} absolute inset-0 top-[20px] 
      max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      <div className="flex flex-col justify-center items-center mt-5 ">
      <div className="w-5 h-5 rounded-full bg-[#915eff]" />
        <div className="w-1 sm:h-80 h-40 violet-gradient" />
      </div>
        <h4 class="font-semibold lg:leading-normal
        leading-normal text-4xl lg:text-4xl mb-5 text-white">
        Extrnl.io <span className='text-xl font-medium'><br/> An International software development company</span>
        <br/> <span class="text-indigo-600">  
        Turning Visions into Code</span></h4>
        <p className="text-slate-400 text-lg max-w-2xl
        mt-[9rem] absolute pt-[33px] leading-[31px] p-[40px] "> 
        "Expert software developers with a passion for 
        creating commercially viable Blockchain products."
        </p>
      </div>
        <ComputersCanvas />

  <div className="absolute xs:bottom-10 bottom-34 w-full 
    flex justify-center items-center pt-4 ">
    <a href="#about"> 
    <div className="w-[35px] h-[64px] rounded-3xl border-4 
    border-secondary flex justify-center items-center p-2 "> 
    <motion.dev 
      animate={{
      y: [0, 24, 0]
      }}
      transition={{
      duration: 1.5,
      repeat: Infinity,
      repeatType: 'loop'
      }}
      className='w-3 h-3 rounded-full bg-secondary mb-1'
      />

    </div>
    </a>
  </div>
  </section>
  )
}

// export default Home

export default SectionWrapper(Home, 'home')
