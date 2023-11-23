import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [current, setCurrent] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // fade: true,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    afterChange: (current) => setCurrent(current),
    beforeChange: (current) => setCurrent(current),
    customPaging: (i) => (
      <div
        className={`w-[15px] h-[15px] rounded-full border-pink-800 border mt-2 ${
          i === current ? "bg-transparent" : "bg-pink-800"
        }`}
      ></div>
    ),
  };
  return (
    <div>
      <div className="w-[80%] mx-auto">
        <h2 className="text-center my-5 text-slate-800">
          Testing Rreact + Slick Carousel
        </h2>
        <Slider {...settings}>
          <div className="h-[200px] bg-slate-500 flex justify-center items-center border-white border rounded rounded-lg">
            <h3 className="text-2xl text-center text-white ">1</h3>
          </div>
          <div className="h-[200px] bg-slate-500 flex justify-center items-center border-white border rounded rounded-lg">
            <h3 className="text-2xl text-center text-white ">2</h3>
          </div>
          <div className="h-[200px] bg-slate-500 flex justify-center items-center border-white border rounded rounded-lg">
            <h3 className="text-2xl text-center text-white ">3</h3>
          </div>
          <div className="h-[200px] bg-slate-500 flex justify-center items-center border-white border rounded rounded-lg">
            <h3 className="text-2xl text-center text-white ">4</h3>
          </div>
          <div className="h-[200px] bg-slate-500 flex justify-center items-center border-white border rounded rounded-lg">
            <h3 className="text-2xl text-center text-white ">5</h3>
          </div>
          <div className="h-[200px] bg-slate-500 flex justify-center items-center border-white border rounded rounded-lg">
            <h3 className="text-2xl text-center text-white ">6</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default App;
