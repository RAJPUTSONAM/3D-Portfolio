import Carousel from "../components/canvas/Carousel";

function ProjectShowcase() {
  const slidesData = [
    {
      imgSrc: "https://images.pexels.com/photos/10183387/pexels-photo-10183387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "1 Project",
      description: "This is my First Project",
      blockchain: "PulseChain",
      techStack: "Solidity, React, Nest.js",
      link: "#"
    },
    {
      imgSrc: "https://images.pexels.com/photos/25300370/pexels-photo-25300370/free-photo-of-a-view-of-a-valley-with-rice-terraces.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "2 Project",
      description: "Description for another project goes here.",
      blockchain: "AnotherBlockchain",
      techStack: "AnotherTechStack",
      link: "#"
    },
    {
      imgSrc: "https://images.pexels.com/photos/15890257/pexels-photo-15890257/free-photo-of-wildflowers-in-a-glass-jar-and-a-pot-on-a-wooden-table-in-a-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "3 Project",
      description: "Description for another project goes here.",
      blockchain: "AnotherBlockchain",
      techStack: "AnotherTechStack",
      link: "#"
    }
  ];

  const slides = slidesData.map((slide, index) => (
    <div key={index} className="flex flex-col lg:flex-row items-center text-white w-[90%] lg:w-full p-1 pl-9">
      <div className="w-full lg:w-[450px] h-auto p-2">
        <img
          src={slide.imgSrc}
          alt="Project screenshot"
          className="rounded-lg shadow-lg w-full"
        />
      </div>
      <div className="w-full lg:w-[512px] mt-5 lg:mt-0 lg:ml-8">
        <h1 className="text-2xl font-bold max-w-lg mt-10">{slide.title}</h1>
        <p className="mt-4 max-w-xl">{slide.description}</p>
        <p className="mt-2 max-w-xl">
          <strong>Blockchain:</strong> {slide.blockchain}
        </p>
        <p className="mt-1 max-w-lg">
          <strong>Tech Stack:</strong> {slide.techStack}
        </p>
        <a
          href={slide.link}
          target="_blank"
          className="mt-5 inline-block cursor-pointer px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 border-indigo-600 
  hover:border-indigo-700 transition btn"
        >
          click here
        </a>
      </div>
    </div>
  ));

  return (
    <div className="w-full lg:w-[100%] h-auto lg:h-[30%] m-auto shadow-lg rounded-md shadow-slate-600">
      <Carousel slides={slides} />
    </div>
  );
}

export default ProjectShowcase;
