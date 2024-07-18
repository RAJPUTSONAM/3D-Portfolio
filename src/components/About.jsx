import React from 'react';
import { Tilt }from 'react-tilt';
import { motion } from 'framer-motion';
import { SectionWrapper} from '../hoc';
import forwardicon from '../assets/fast-forward.png'

import { styles } from '../styles';
// import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const AboutCard = ({ index, title, icon }) => {
  return(
  <Tilt className='xs:w-[250px] w-full'>
  <motion.div
    variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
  >
  <div 
    options={{
    max: 45,
    scale: 1,
    speed: 450
  }}         
    className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] 
    flex justify-evenly items-center flex-col'
  >
  <img src={icon} alt={title} className='w-16 h-16 object-contain' />
    <h3 className='text-white text=[20px] font-bold text-center' >{title}</h3>
  </div>
  </motion.div>
  </Tilt>
  )
}

const About = () => {
  return ( 
  <>
  <div className='mt-0'> 
  <h3 className={styles.sectionHeadText}>About Us</h3>
  <p className='text-slate-400 max-w-xl'>A team of skilled members having       
  work Experience in different domain like 
  Information Technology, Blockchain, Print Media, Insurance, etc.
  </p>
  </div> <br/>  <br/>
  <div className='grid lg:grid-cols-12 md:grid-cols-2 
   grid-col-1 items-center mt-16 gap-[30px]'>
  <div className='lg:col-span-5'>
  <img src='https://ultraboxhosting.imgix.net/hero-svg-img-1.svg?auto=format&fit=clip&dpr=2' alt='animation' 
  className='float-right my-0.4 h-[350px] w-[560px] '/>
  </div>
  <div className='lg:col-span-7 mt-8 md:mt-0'>
  <div className='ltr:lg-ml-10 rtl:lg:mr-10'>
  <p className='text-slate-300 max-w-xl mb-3'>BlockChain Services</p>
  <h3 className='mb-6 md:text-3xl text-2xl md:leading-normal 
  leading-normal font-semibold text-indigo-600 '>"Decentralized Application's: Building with Confidence"</h3>
  <p className='max-w-xl'>
  "With a focus on perfection, our five-step methodology ensures the creation of secure and dependable smart contracts for our clients."</p>
  <ul className='list-none text-slate-400 mt-3'>
  <li className='mb-1 flex text-white text-[20px] gap-x-3.5 '>
  <i className='text-indigo-600 
  text-xl 1tr:mr-2 rtl:ml-2 flex-gap '>
    <img src={forwardicon} width={13}  className='pt-2'/>
  </i>
  PLAN
  </li>
  <li className='mb-1 flex text-white 
  text-[20px] gap-x-3.5 '>
  <i className='text-indigo-600 
  text-xl 1tr:mr-2 rtl:ml-2 flex-gap '>
    <img src={forwardicon} width={13}  className='pt-2'/>
  </i>
  PROTOTYPE
  </li>
  <li className='mb-1 flex text-white text-[20px] gap-x-3.5 '>
  <i className='text-indigo-600 
  text-xl 1tr:mr-2 rtl:ml-2 flex-gap '>
    <img src={forwardicon} width={13}  className='pt-2'/>
  </i>
  PRODUCE
  </li>
  <li className='mb-1 flex text-white text-[20px] gap-x-3.5 '>
  <i className='text-indigo-600 
  text-xl 1tr:mr-2 rtl:ml-2 flex-gap'>
    <img src={forwardicon} width={13}  className='pt-2'/>
  </i>
  PROTECT 
  </li>
  <li className='mb-1 flex text-white text-[20px] gap-x-3.5 '>
  <i className='text-indigo-600 text-xl 1tr:mr-2 rtl:ml-2 flex-gap '>
  <img src={forwardicon} width={13} className='pt-2'/>
  </i>
  PRESENT  
  </li>
  </ul>
  <div className='mt-4'>
  <a href='/' className='btn btn-link text-indigo-300 hover:text-indigo-300 
  after:bg-indigo-300 duration-500 ease-in-out' >Find Out More
  </a>
</div>
</div>
</div>
</div>

      
  <div className="container md:mt-24 mt-16">
    <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 
    items-center mt-10 gap-[30px]">
    <div className="lg:col-span-5 md:order-2 order-1">
    <div className="ltr:lg:ml-10 rtl:lg:mr-10">
    <div className='dark:bg-slate-900 p-6 rounded-md dark:shadow-gray-800 mt-20px' >
    <img src='https://www.fastcomet.com/storage/upload/images/static/iconsets/easy-sharing.svg' alt='Mobile' 
    className='w-[300px] h-auto mt-49px'/>
    </div>
    </div>
    </div>

    <div className='lg:col-span-7 md:order-1 order-2 mt-8 md:mt-0'>
      <h2 className='mb-6 md:text-3xl text-2xl md:leading-normal 
      leading-normal font-semibold'> GENERAL <br/> 
      <span className='text-indigo-600'> SOFTWARE DEVELOPMENT</span></h2>

      <ul class="list-none text-white text-slate-400 mt-4">
      <li class="mb-1 flex gap-x-3.5 ">
      <i class=" text-indigo-600 text-xl ltr:mr-2 rtl:ml-2">
      <img src={forwardicon} width={13}  className='pt-2'/>
      </i> Ideation and Research</li>
      <li class="mb-1 flex gap-x-3.5 ">
      <i class=" text-indigo-600 text-xl ltr:mr-2 rtl:ml-2">
      <img src={forwardicon} width={13}  className='pt-2'/>
      </i> Prototyping</li>
      <li class="mb-1 flex gap-x-3.5 ">
      <i class=" text-indigo-600 text-xl ltr:mr-2 rtl:ml-2">
      <img src={forwardicon} width={13}  className='pt-2'/>
      </i> UI/UX Design</li>
      <li class="mb-1 flex gap-x-3.5 ">
      <i class=" text-indigo-600 text-xl ltr:mr-2 rtl:ml-2">
      <img src={forwardicon} width={13}  className='pt-2'/>
      </i> MVP development</li>
      </ul>
    <div>
      <a href='/' className=' mt-7 btn btn-link text-indigo-300 hover:text-indigo-300 
      after:bg-indigo-300 duration-500 ease-in-out cursor-pointer'> Find Out More </a>
    </div>
   </div>
  </div>  
</div>
  </>
  )
}

export default SectionWrapper( About, 'about');
