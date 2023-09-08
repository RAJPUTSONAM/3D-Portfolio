import { motion } from 'framer-motion';

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="w-5 h-5 rounded-full bg-[#915eff] " />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>


        <h4 class="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">
          HI! WE ARE <br/> <span class="text-indigo-600">NAMBI TECHNOLOGIES</span></h4>
          <p className="text-slate-400 text-lg max-w-3xl mt-4 absolute pt-32 leading-[31px] p-[30px]"> 
            "A group of talented software developers who are passionate about building commercially scalable Blockchain products."
          </p>
      </div>
          <ComputersCanvas />

          <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center pt-4  ">
          <a href="#about"> 
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2 "> 
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

export default Hero
