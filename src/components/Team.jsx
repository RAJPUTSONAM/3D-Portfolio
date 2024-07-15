import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { team  } from "../constants";

const TeamCard = ({
  index,
  image,
  name,
  designation,
  Head,
  Link,
}) => (
  <motion.div
  variants={fadeIn("", "spring", index * 0.5, 0.75)}
  className='bg-black-200 p-10 rounded-3xl xs:w-[100%] w-full flex flex-col items-center'
  >

  <div className='mt-1 flex flex-col items-center'>
    <img
      src={image}
      alt={`feedback_by-${name}`}
      className='w-[100px] h-[100px] object-cover rounded-full'/>
      {/* <p className='text-white tracking-wider text-[18px]'>{testimonial}</p> */}


  <div className='mt-7 flex justify-between items-center gap-1'>
    <div className='flex-1 flex flex-col items-center'>
      <p className='text-white font-bold text-[20px] '>
        <span className='blue-text-gradient'></span> {name}
      </p>
      <p className='mt-1 text-secondary text-[12px] text-center'>
        {designation} <br/> {Head}
      </p>

    <ul className="list-none mt-4">
      <li className="inline">
        <a 
        href={Link}
        target="_blank"
        class="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md 
        hover:border-emerald-600 hover:bg-emerald-600 hover:text-white" >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
        stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 
        0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle> {Link} {Link}
        </svg>
        </a>
      </li>
    </ul>
   </div>
  </div>
</div>
  </motion.div>
);  

const Team = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
    <div
      className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>

    <motion.div variants={textVariant()}>
    <p className='flex justify-center mb-4 text-4xl'>Team Members</p>
    <h2 className="text-slate-400 ">Each team memebers is special for us. 
    We believe that everyone possesses one or more qualities
    that we cultivate in order to create success stories for our clients.</h2> 
    <br/>
    <div className="container">
    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
    <div className="lg:col-span-5 md:col-span-6">
    <div className="grid grid-cols-12 gap-6 items-center">
    <div className="col-span-6">
    <div className="grid grid-cols-1 gap-6">
      <img src="https://nambitech.com/assets/images/about/ab03.jpg" className="shadow rounded-md" />
      <img src="https://nambitech.com/assets/images/about/ab02.jpg" className="shadow rounded-md" />
    </div>
    </div>

    <div className="col-span-6">
    <div className="grid grid-cols-1 gap-6">
    <img src="https://nambitech.com/assets/images/about/ab01.jpg" className="shadow rounded-md"/>
    </div>
    </div>
  </div>
</div>

  <div className="lg:col-span-7 md:col-span-6 mt-20">
  <div className="1tr:lg:ml-5 rtl:lg:mr-5"> 
  <h3 className="mb-6 md:text-3xl md:leading-normal 
  leading-normal font-semibold">Who we are?
  </h3>
  <p class="text-slate-400 max-w-xl">We are a group of professional 
  engineers and marketers who founded this
  company with the goal of providing clients with affordable,
  high-quality services. We are here to make a big name by providing world-class services.
  </p>
  <br/>
  <p class="text-slate-400 max-w-xl">We specialize in multiple technologies 
  like Solidity, Nodejs/NestJS, ReactJ, Angular2+, PHP Laravel, WordPress, Asp.net, 
  Relational and Non-Relational Database PostgreSQL, MySQL, MongoDB, and SQLite.
  </p>
  <br/>
  <p class="text-slate-400 max-w-xl">We have experience in varied domains which include DeFI,
  Insurance, PrintMedia, E-commerce, Supply Chain, Manufacturing, etc.
  </p>
  <br/>
  <p class="text-slate-400 max-w-xl">We don't want to brag about what we're doing now, 
  but we want you to keep an eye on this section as we add customer success stories.</p>
  </div>
  <div className="mt-6">
  <a href="/contact" class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 
  hover:border-indigo-700 text-white rounded-md ltr:mr-2 rtl:ml-2 mt-2"> 
  Contact Us
</a>
  <div className="mt-20 ">
  <h3 className="font-bold mb-2 text-3xl">FOUNDER</h3>
    </div>
    </div> 
   </div>
  </div>
 </div>
</motion.div>
    <br/><br/>
</div>
  <div className={`-mt-20 pb-14 justify-center ${styles.paddingX} flex flex-wrap gap-7`}>
  {team.map((team, index) => (
  <TeamCard key={team.name} index={index} {...team} />
  ))}
</div>
</div>
  );
};

export default SectionWrapper(Team, "team");
