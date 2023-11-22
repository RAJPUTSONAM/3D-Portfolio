import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";
import { SlEnvolope } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";

// sonam
//template_l4tlpjd
//service_dv37htg
//_aKGYJXoIucqqeWEf

const Contact = () => {
  const formRef = useRef();
  const [form, setform ] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
  const { name, value } = e.target;

  setform({...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_dv37htg', 'template_l4tlpjd',
    {
      from_name: form.name,
      to_name: 'Sonam',
      from_email: form.email,
      to_email: 'rajputsonam1706@gmail.com',
      message: form.message,
    },
    '_aKGYJXoIucqqeWEf'
    )
    .then(() => {
      setLoading(false);
      alert('Thank You. I will get back to you as soon as possible.');

      setform({
        name: '',
        email:'',
        message:'',
      })
    }, (error) => {
      setLoading(false)

      console.log(error);

      alert('Something went wrong.')
    })
  }

  return (
    <div className="xl:mt-12 flex xl:flex-row gap-10 overflow-hidden ">
      <motion.div
       variants={slideIn("left", "tween", 0.2, 1)}
       className="flex-[0.75] bg-black-100 p-8 rounded-2xl mb-[800px]"
      >
        <p className={styles.heroSubText}>Get in touch</p>
        <h3 className={styles.heroHeadText}>Contact.</h3>

        <form  
         ref={formRef}
         onSubmit={handleSubmit}
         className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input 
             type="text"
             name="name"
             value={form.name}
             onChange={handleChange}
             placeholder="What's Your Name?"
             className="bg-tertiary py-4 px-6 placeholder:text-secondary 
             text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input 
             type="email"
             name="email"
             value={form.email}
             onChange={handleChange}
             placeholder="What's Your email?"
             className="bg-tertiary py-4 px-6 placeholder:text-secondary 
             text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
             rows="7" 
             name="message"
             value={form.message}
             onChange={handleChange}
             placeholder="What do you want to say?"
             className="bg-tertiary py-4 px-6 placeholder:text-secondary 
             text-white rounded-lg outlined-none border-none font-medium"
             
            />
          </label>

          <button 
          type="submit"
          className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
       variants={slideIn('right', "tween", 0.2, 1)}
       className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] w-[100%] "
      >
        <EarthCanvas/>
      
     </motion.div>
        <motion.div
        className=" mt-[59px] ml-[211px] absolute fixed"
        >
        <div class="mt-[844px] mr-[90px]">
          <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-[30px]">

            <div class="text-center px-6 mt-6 bg-black-100 p-9 border-box w-full lg:w-[117%] rounded-2xl">
              <div class="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex 
              align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
              <i><SlEnvolope /></i>
            </div>
            
          <div class="content mt-7">
            <h5 class="title h5 text-xl font-medium">Email</h5>
            <p class="text-slate-400 mt-3">Connect with us on</p>
            
        <div class="mt-5">
          <a href="mailto:contact@nambitech.com" class="btn btn-link text-indigo-600 hover:text-indigo-600 
          after:bg-indigo-600 duration-500 ease-in-out">contact@nambitech.com</a>
        </div>
      </div>
     </div>

     <div class="text-center px-6 mt-6 bg-black-100 p-8 rounded-2xl border-box lg:w-[117%] ml-[5rem] ">
      <div class="w-20 h-20 bg-indigo-600/5 text-indigo-500 rounded-xl text-3xl 
      flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
      <i><CiLocationOn /></i>
     </div>
    
     <div class="content mt-7">
      <h5 class="title h5 text-xl font-medium">Location</h5>
      <p class="text-slate-400 mt-3">High Street Mall, Kapurbavdi Junction, Thane - 400607, Maharashtra</p>
    </div>
    </div>
   </div>
  </div>
        </motion.div>


    </div>
  );
};



export default SectionWrapper(Contact, 'contact')