import Carousel from "../components/canvas/Carousel";

function ProjectShowcase() {
  const slides = [
    <div className="flex flex-col lg:flex-row items-center text-white">
      <div className="w-full lg:w-[450px] h-auto p-2 hidden lg:block">
        <img
          src="https://images.pexels.com/photos/10183387/pexels-photo-10183387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Project screenshot"
          className="rounded-lg shadow-lg ml-3"
        />
      </div>
      <div className="w-full lg:w-[512px] ml-[2rem]">
        <h1 className="text-2xl font-bold max-w-lg">1 Project</h1>
        <p className="mt-4 max-w-xl">
          This is my First Project
        </p>
        <p className="mt-2 max-w-xl">
          <strong>Blockchain:</strong> PulseChain
        </p>
        <p className="mt-1 max-w-lg">
          <strong>Tech Stack:</strong> Solidity, React, Nest.js
        </p>
        <a
          href="#"
          className="mt-4 inline-block cursor-pointer px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 border-indigo-600 
  hover:border-indigo-700 transition btn"
        >
          click here
        </a>
      </div>
    </div>,
    <div className="flex flex-col lg:flex-row items-center text-white">
      <div className="w-full lg:w-[450px] p-3 ml-9 max-w-xl hidden lg:block">
        <img
          src="https://images.pexels.com/photos/25300370/pexels-photo-25300370/free-photo-of-a-view-of-a-valley-with-rice-terraces.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Project screenshot"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full lg:w-1/2 ml-[4rem]">
        <h1 className="text-2xl font-bold">2 Project</h1>
        <p className="mt-4">
          Description for another project goes here.
        </p>
        <p className="mt-2">
          <strong>Blockchain:</strong> AnotherBlockchain
        </p>
        <p className="mt-1">
          <strong>Tech Stack:</strong> AnotherTechStack
        </p>
        <a
          href="#"
          className="mt-4 inline-block px-4 py-2 bg-indigo-600 hover:bg-indigo-700 border-indigo-600 
  hover:border-indigo-700 btn rounded-lg transition"
        >
          click here
        </a>
      </div>
    </div>,
    <div className="flex flex-col lg:flex-row items-center text-white">
      <div className="w-full lg:w-[503px] ml-9 hidden lg:block">
        <img
          src="https://images.pexels.com/photos/15890257/pexels-photo-15890257/free-photo-of-wildflowers-in-a-glass-jar-and-a-pot-on-a-wooden-table-in-a-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Project screenshot"
          className="rounded-lg shadow-lg "
        />
      </div>
      <div className="w-full lg:w-1/2 ml-[4rem]">
        <h1 className="text-2xl font-bold">3 Project</h1>
        <p className="mt-4">
          Description for another project goes here.
        </p>
        <p className="mt-2">
          <strong>Blockchain:</strong> AnotherBlockchain
        </p>
        <p className="mt-2">
          <strong>Tech Stack:</strong> AnotherTechStack
        </p>
        <a
          href="#"
          className="mt-4 inline-block px-4 py-2 bg-indigo-600 hover:bg-indigo-700 border-indigo-600 
  hover:border-indigo-700 btn rounded-lg transition"
        >
          click here
        </a>
      </div>
    </div>
  ];

  return (
        <div className="w-full lg:w-[100%] h-auto lg:h-[30%] m-auto shadow-lg rounded-md shadow-slate-600">
          <Carousel slides={slides} />
        </div>      
  );
}

export default ProjectShowcase;
