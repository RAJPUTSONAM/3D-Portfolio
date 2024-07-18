import React from 'react';
import { SlEnvolope } from 'react-icons/sl';
import { CiLocationOn } from 'react-icons/ci';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
// import { faTwitter, faYoutube, faTelegram } from '@fontawesome/free-brands-svg-icons';

const ContactInfoSection = () => {
  return (
    <div className="mt-24 flex flex-col md:flex-row gap-8 items-center justify-center">
      <div className="text-center px-6 bg-black-100 p-9 border-box w-full md:w-[40%] rounded-2xl">
        <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex 
          align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
          <SlEnvolope />
        </div>
        <div className="content mt-5">
          <h5 className="title h5 text-xl font-medium pt-1">Email</h5>
          <p className="text-slate-400 mt-3">Connect with us on</p>
          <div className="mt-4">
            <a href="mailto:contact@nambitech.com" className="btn btn-link text-indigo-600 hover:text-indigo-600 
              after:bg-indigo-600 duration-500 ease-in-out">contact@nambitech.com</a>
          </div>
        <div className='align-middle justify-center items-center gap-5 mt-5 flex space-x-2 '>
        <a href="https://twitter.com/your-twitter-handle"><i className='transition duration-300'>{<FaSquareXTwitter/>}</i>  </a>
        <a href="https://www.youtube.com/"><i className=''>{<FaYoutube/>}</i>  </a>
        <a href="https://web.telegram.org/k/"><i className=''>{<FaTelegram/>}</i>  </a>
        </div>
        </div>
      </div>

      <div className="text-center px-6 bg-black-100 p-8 rounded-2xl border-box h-auto md:h-[321px] w-full md:w-[40%]">
  <div className="w-20 h-20 bg-indigo-600/5 text-indigo-500 rounded-xl text-3xl 
    flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
    <CiLocationOn />
  </div>
  <div className="content mt-8">
    <h5 className="title h5 text-xl font-medium">Location</h5>
    <p className="text-slate-400 mt-4">High Street Mall, Kapurbavdi Junction, Thane - 400607, Maharashtra</p>
    <a href="https://www.google.com/maps/place/High+Street+Mall/@19.2183,72.9781,15z" target="_blank" rel="noopener noreferrer">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9956061580366!2d72.97591141490197!3d19.218299987011498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795418fc0c019%3A0x5bcd9d2b9b2b8f20!2sHigh%20Street%20Mall!5e0!3m2!1sen!2sin!4v1625678901234!5m2!1sen!2sin" 
        width="100%" 
        height="50px" 
        className='mt-3 bg-slate-800'
        style={{border:0}} 
        allowFullScreen="" 
        loading="lazy"></iframe>
    </a>
  </div>
</div>

    </div>
  );
};

export default ContactInfoSection;

