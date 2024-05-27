import React from 'react';
import { SlEnvolope } from 'react-icons/sl';
import { CiLocationOn } from 'react-icons/ci';

const ContactInfoSection = () => {
  return (
    <div className="mt-24 flex flex-col md:flex-row gap-8 items-center justify-center">
      <div className="text-center px-6 bg-black-100 p-9 border-box w-full md:w-[40%] rounded-2xl">
        <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex 
          align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
          <SlEnvolope />
        </div>
        <div className="content mt-7">
          <h5 className="title h5 text-xl font-medium">Email</h5>
          <p className="text-slate-400 mt-3">Connect with us on</p>
          <div className="mt-5">
            <a href="mailto:contact@nambitech.com" className="btn btn-link text-indigo-600 hover:text-indigo-600 
              after:bg-indigo-600 duration-500 ease-in-out">contact@nambitech.com</a>
          </div>
        </div>
      </div>

      <div className="text-center px-6 bg-black-100 p-8 rounded-2xl border-box h-auto md:h-[293px] w-full md:w-[40%]">
        <div className="w-20 h-20 bg-indigo-600/5 text-indigo-500 rounded-xl text-3xl 
          flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
          <CiLocationOn />
        </div>
        <div className="content mt-8">
          <h5 className="title h5 text-xl font-medium">Location</h5>
          <p className="text-slate-400 mt-8">High Street Mall, Kapurbavdi Junction, Thane - 400607, Maharashtra</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;

