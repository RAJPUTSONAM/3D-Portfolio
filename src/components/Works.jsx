import {Tilt} from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { Svg } from '@react-three/drei';

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)} >
      <Tilt 
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full " 
      >
      <div className='relative w-full h-[230px] '>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover rounded-2xl'
        />

      <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
        <div
          onClick={() => window.open(source_code_link, "_blank")}
          className='black-gradient w-10 h-10 rounded-full flex 
          justify-center items-center cursor-pointer'
        >
        <img 
          src={github}
          alt='github'
          className='w-1/2 h-1/2 object-contain'
        />
        </div>
      </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
          ))}
      </div>
      </Tilt>
    </motion.div>
  )
} 

const Works = () => {
  return (
<div className='container'>
    <div className='grid grid-cols-1 pb-8 text-center'>
      <h3 className='mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold'>
      Our Work</h3>
    </div>

  <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] mt-8'>
      <div className='flex transition-all duration-500 hover:scale-105 shadow 
      dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700
      ease-in-out items-center p-3 rounded-md bg-white 
      dark:bg-slate-900__web-inspector-hide-shortcut__'>
      <div className='flex items-center justify-center h-[45px] min-w-[45px]
       -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10
      text-indigo-600 text-center rounded-full ltr:mr-3 rtl:ml:3'>
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' 
       viewBox='0 0 24 24' fill='none'
       stroke='currentColor' stroke-width='2'
       stroke-Linecap='round' stroke-Linejoin='round' 
       className='h-5 w-5 rotate-45'>
      <rect x='2' width='20' height='14' rx='2' ry='2'></rect>
      <line x1='8' y1='21' x2='16' y2='21'></line>      
      <line x1='12' y1='17' x2='12' y2='21'></line>
      </svg>
    </div>
      <div className='flex-1 pl-8'>
        <h4 className='mb-0 text-lg font-medium text-black-200'>DECENTRALIZED 
        EXCHANGE</h4>
      </div>
    </div>

    <div className='flex transition-all duration-500 hover:scale-105 shadow 
      dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700
      ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900'>
      <div className='flex items-center justify-center h-[45px] min-w-[45px] 
      -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10
      text-indigo-600 text-center rounded-full ltr:mr-3 rtl:ml:3'>
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' 
        viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'
        stroke-Linecap='round' stroke-Linejoin='round' 
        className='h-5 w-5 rotate-45'>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 
         0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
        </path>
      </svg>
      </div>
        <div className='flex-1 pl-8'>
          <h4 className='mb-0 text-lg font-medium text-black-200'>ICO</h4>
          </div>
    </div>

    <div className='flex transition-all duration-500 hover:scale-105 shadow 
      dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700
      ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900'>
      <div className='flex items-center justify-center h-[45px] min-w-[45px] 
      -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10
      text-indigo-600 text-center rounded-full ltr:mr-3 rtl:ml:3'>
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' 
      viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'
      stroke-Linecap='round' stroke-Linejoin='round' 
      className='h-5 w-5 rotate-45'>
      <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
      <circle cx='12' cy='12' r='3'></circle>
      </svg>
      </div>
      <div className='flex-1 pl-8'>
        <h4 className='mb-0 text-lg font-medium text-black-200'>IDO</h4>
      </div>
    </div>

    <div className='flex transition-all duration-500 hover:scale-105 shadow 
      dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700
      ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900'>
      <div className='flex items-center justify-center h-[45px] min-w-[45px] 
      -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10
      text-indigo-600 text-center rounded-full ltr:mr-3 rtl:ml:3'>
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' 
      viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'
      stroke-Linecap='round' stroke-Linejoin='round' 
      className='h-5 w-5 rotate-45'>
      <rect x='3' y='3' width='18' height='18' rx='2' ry='2'></rect>
      <line x1='3' y1='9' x2='21' y2='9'></line>
      <line x1='9' y1='21' x2='9' y2='9'></line>
      </svg>
      </div>
      <div className='flex-1 pl-8'>
        <h4 className='mb-0 text-lg font-medium text-black-200'>YIELD FARMING</h4>
      </div>
    </div>

    <div className='flex transition-all duration-500 hover:scale-105 shadow 
      dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700
      ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900'>
      <div className='flex items-center justify-center h-[45px] min-w-[45px] 
      -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10
      text-indigo-600 text-center rounded-full ltr:mr-3 rtl:ml:3'>
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' 
      viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'
      stroke-Linecap='round' stroke-Linejoin='round' 
      className='h-5 w-5 rotate-45'>
      <path d='M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z'></path>
      <line x1='16' y1='8' x2='2' y2='22'></line>
      <line x1='17.5' y1='  15' x2='9' y2='15'></line>
      </svg>
      </div>
      <div className='flex-1 pl-8'>
        <h4 className='mb-0 text-lg font-medium text-black-200'>YIELD AGGREGATOR</h4>
      </div>
    </div>

    <div className='flex transition-all duration-500 hover:scale-105 shadow 
      dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700
      ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900'>
      <div className='flex items-center justify-center h-[45px] min-w-[45px] 
      -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10
      text-indigo-600 text-center rounded-full ltr:mr-3 rtl:ml:3'>
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' 
      viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'
      stroke-Linecap='round' stroke-Linejoin='round' 
      className='h-5 w-5 rotate-45'>
      <polyline points='16 18 22 12 16 6'></polyline>
      <polyline points='8 6 2 12 8 18'></polyline>
      </svg>
      </div>
      <div className='flex-1 pl-8'>
        <h4 className='mb-0 text-lg font-medium text-black-200'>LEADING PLATFORMS</h4>
      </div>
    </div>

    <div className='flex transition-all duration-500 hover:scale-105 shadow 
      dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700
      ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900'>
      <div className='flex items-center justify-center h-[45px] min-w-[45px] 
      -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10
      text-indigo-600 text-center rounded-full ltr:mr-3 rtl:ml:3'>
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' 
      viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'
      stroke-Linecap='round' stroke-Linejoin='round' 
      className='h-5 w-5 rotate-45'>
      <path d='M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path>
      <circle cx='8.5' cy='7' r='4'></circle>
      <polyline points='17 11 19 13 23 9'></polyline>
      </svg>
      </div>
      <div className='flex-1 pl-8'>
        <h4 className='mb-0 text-lg font-medium text-black-200'>LOTTERY</h4>
      </div>
    </div>
        
    <div className='flex transition-all duration-500 hover:scale-105 shadow 
      dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700
      ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900'>
      <div className='flex items-center justify-center h-[45px] min-w-[45px] 
      -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10
      text-indigo-600 text-center rounded-full ltr:mr-3 rtl:ml:3'>
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' 
      viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'
      stroke-Linecap='round' stroke-Linejoin='round' 
      className='h-5 w-5 rotate-45'>
      <circle cx='12' cy='12' r='10'></circle>
      <line x1='1' y1='12' x2='22' y2='12'></line>
      <path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 
      15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'>
      </path>
      </svg>
      </div>
      <div className='flex-1 pl-8'>
        <h4 className='mb-0 text-lg font-medium text-black-200'>NFT MARKETPLACE</h4>
      </div>
    </div>

    <div className='flex transition-all duration-500 hover:scale-105 shadow 
      dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700
      ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900'>
      <div className='flex items-center justify-center h-[45px] min-w-[45px] 
      -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10
      text-indigo-600 text-center rounded-full ltr:mr-3 rtl:ml:3'>
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' 
      viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'
      stroke-Linecap='round' stroke-Linejoin='round' 
      className='h-5 w-5 rotate-45'>
      <circle cx='12' cy='12' r='3'></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 
      2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 
      1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 
      0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 
      1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 
      2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 
      1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 
      0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 
      1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0
      1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 
      1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
      </path>
      </svg>
      </div>
      <div className='flex-1 pl-8'>
        <h4 className='mb-0 text-lg font-medium text-black-200'>STAKING AND LOCKING 
        PLATFORMS</h4>
      </div>
    </div>

    <div className='flex transition-all duration-500 hover:scale-105 shadow 
      dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700
      ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900'>
      <div className='flex items-center justify-center h-[45px] min-w-[45px] 
      -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10
      text-indigo-600 text-center rounded-full ltr:mr-3 rtl:ml:3'>
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' 
      viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'
      stroke-Linecap='round' stroke-Linejoin='round' 
      className='h-5 w-5 rotate-45'>
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="8.5" cy="7" r="4"></circle>
      <polyline points="17 11 19 13 23 9"></polyline>
      </svg>
      </div>
      <div className='flex-1 pl-8'>
        <h4 className='mb-0 text-lg font-medium text-black-200'>AUCTION</h4>
      </div>
    </div>

    <div className='flex transition-all duration-500 hover:scale-105 shadow 
      dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700
      ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900'>
      <div className='flex items-center justify-center h-[45px] min-w-[45px] 
      -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10
      text-indigo-600 text-center rounded-full ltr:mr-3 rtl:ml:3'>
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' 
      viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'
      stroke-Linecap='round' stroke-Linejoin='round' className='h-5 w-5 rotate-45'>
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 
      15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
      </path>
      </svg>
      </div>
      <div className='flex-1 pl-8'>
        <h4 className='mb-0 text-lg font-medium text-black-200'>TOKENIZATION 
        OF REAL ESTATE</h4>
      </div>
    </div>
  </div> 
</div>
      
  )
}

export default SectionWrapper(Works, '')


