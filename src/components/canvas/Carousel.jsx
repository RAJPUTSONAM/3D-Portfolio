import { useState, useEffect } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsPauseCircle, BsPlayCircle } from "react-icons/bs";
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval); // Clear interval on component unmount
    }
  }, [isPlaying]);

  return (
    <div className="overflow-hidden relative bg-gray-900 p-8 rounded-lg shadow-lg">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <button onClick={previousSlide} className=" text-3xl text-indigo-300 hover:text-slate-100">
          <MdOutlineKeyboardDoubleArrowLeft />
        </button>
        <button onClick={nextSlide} className=" text-3xl text-indigo-300 hover:text-slate-100">
          <MdOutlineKeyboardDoubleArrowRight />
        </button>
      </div>
      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((_, i) => (
          <div
            key={"circle" + i}
            onClick={() => setCurrent(i)}
            className={`rounded-full w-5 h-5 cursor-pointer`}
          ></div> 
        ))}
      </div>
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-3 right-4 text-blue-950 hover:text-blue-900 text-3xl"
      >
        {isPlaying ? <BsPauseCircle /> : <BsPlayCircle />}
      </button>

    </div>
  );
}
