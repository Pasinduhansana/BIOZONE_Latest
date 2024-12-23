import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring"; // Import react-spring for animation
import Img1 from "../Assest/Web_Images/1.jpg";
import Img2 from "../Assest/Web_Images/2.jpeg";
import Img3 from "../Assest/Web_Images/3.jpg";
import Img4 from "../Assest/Web_Images/4.jpg";
import Img5 from "../Assest/Web_Images/5.jpg";
import Img6 from "../Assest/Web_Images/6.jpg";
import Img7 from "../Assest/Web_Images/7.jpg";
import Img8 from "../Assest/Web_Images/8.jpg";
import Img9 from "../Assest/Web_Images/9.jpg";

const Gallery = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);

  const target1 = 6;
  const target2 = 421;
  const target3 = 834;
  const target4 = 321;

  const gridRef1 = useRef(null);
  const gridRef2 = useRef(null);
  const gridRef3 = useRef(null);
  const gridRef4 = useRef(null);

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === gridRef1.current) {
            setCounter1(target1);
          } else if (entry.target === gridRef2.current) {
            setCounter2(target2);
          } else if (entry.target === gridRef3.current) {
            setCounter3(target3);
          } else if (entry.target === gridRef4.current) {
            setCounter4(target4);
          }
        }
      });
    }, observerOptions);

    if (gridRef1.current) observer.observe(gridRef1.current);
    if (gridRef2.current) observer.observe(gridRef2.current);
    if (gridRef3.current) observer.observe(gridRef3.current);
    if (gridRef4.current) observer.observe(gridRef4.current);

    return () => {
      if (gridRef1.current) observer.unobserve(gridRef1.current);
      if (gridRef2.current) observer.unobserve(gridRef2.current);
      if (gridRef3.current) observer.unobserve(gridRef3.current);
      if (gridRef4.current) observer.unobserve(gridRef4.current);
    };
  }, []);

  const animatedCounter1 = useSpring({
    number: counter1,
    from: { number: 0 },
    config: { duration: 1000 },
  });
  const animatedCounter2 = useSpring({
    number: counter2,
    from: { number: 0 },
    config: { duration: 1000 },
  });
  const animatedCounter3 = useSpring({
    number: counter3,
    from: { number: 0 },
    config: { duration: 1000 },
  });
  const animatedCounter4 = useSpring({
    number: counter4,
    from: { number: 0 },
    config: { duration: 1000 },
  });

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative flex flex-col justify-center w-full p-8 py-24 mx-auto 2xl:max-w-7xl">
        <div className="py-10 text-center">
          <h3 className="mb-6 font bg-gradient-to-r from-[#2BC294] to-[#02624C] bg-clip-text text-transparent font-semibold">
            Gallery
          </h3>
          <h1 className="mb-6 text-4xl">Chat to our friendly team</h1>
          <p className="text-lg">
            Witness engaging classroom sessions where learning comes alive. From
            interactive discussions to practical
            <br /> activities, see how students grow and excel.
          </p>
        </div>
        <div className="pt-12 mx-auto mt-12 text-gray-500 max-w-7xl border-neutral-200 text-balance">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-12">
            {/* 1 */}
            <div
              ref={gridRef1}
              className="bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl md:col-span-5 md:row-span-2"
            >
              <img
                src={Img1}
                alt="Grid 1"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>

            {/* 2 */}
            <div className="flex items-center justify-center p-6 text-white shadow ring-1 ring-inset md:col-span-2 md:row-span-2 rounded-xl bg-gradient-to-r from-primary1 to-primary2">
              <p className="text-2xl text-center">
                Completed <br /> Journey <br />
                <br />
                <animated.span>
                  {animatedCounter1.number.to((n) => `${n.toFixed(0)}Y+`)}
                </animated.span>
              </p>
            </div>

            {/* 3 */}
            <div
              ref={gridRef2}
              className="bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl md:col-span-5 md:row-span-2"
            >
              <img
                src={Img2}
                alt="Grid 1"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>

            {/* 4 */}
            <div className="bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl md:col-span-7 md:row-span-2">
              <img
                src={Img2}
                alt="Grid 1"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>

            {/* 5 */}
            <div className="bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl md:col-span-5 md:row-span-1">
              <img
                src={Img4}
                alt="Grid 1"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>

            {/* 6 */}
            <div className="flex items-center justify-center p-6 text-white shadow ring-1 ring-inset md:col-span-5 md:row-span-1 rounded-xl bg-gradient-to-r from-primary1 to-primary2">
              <p className="text-4xl text-center ">
                <animated.span>
                  {animatedCounter2.number.to((n) => `${n.toFixed(0)}+`)}
                </animated.span>
              </p>
              <p className="px-12 text-4xl">|</p>
              <p className="text-lg text-center">
                Positive Feedback from <br /> Student
              </p>
            </div>

            {/* 7 */}
            <div className="flex flex-col items-center justify-center p-6 text-white shadow ring-1 ring-inset md:col-span-5 md:row-span-1 rounded-xl bg-gradient-to-r from-primary1 to-primary2">
              <p className="mb-12 text-4xl font-semibold text-center">
                Inspiring Moments
              </p>
              <p className="text-xl text-center">
                Witness engaging classroom <br />
                sessions where learning comes <br />
                alive. From interactive discussions <br />
                to practical activities, see how <br />
                students grow and excel.
              </p>
            </div>

            {/* 8 */}
            <div className="bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl md:col-span-7 md:row-span-1">
              <img
                src={Img5}
                alt="Grid 1"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>

            {/* 9 */}
            <div className="bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl md:col-span-5 md:row-span-2">
              <img
                src={Img6}
                alt="Grid 1"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>

            {/* 10 */}
            <div className="bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl md:col-span-5 md:row-span-2">
              <img
                src={Img7}
                alt="Grid 1"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>

            {/* 11  */}
            <div
              ref={gridRef3}
              className="flex items-center justify-center p-6 text-white shadow ring-1 ring-inset md:col-span-2 md:row-span-2 rounded-xl bg-gradient-to-r from-primary1 to-primary2"
            >
              <p className="text-2xl text-center">
                Gallery <br /> View <br />
                <br />
                <animated.span>
                  {animatedCounter3.number.to((n) => `${n.toFixed(0)}+`)}
                </animated.span>
              </p>
            </div>

            {/* 12 */}
            <div className="bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl md:col-span-5 md:row-span-1">
              <img
                src={Img8}
                alt="Grid 1"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>

            {/* 13 */}
            <div className="bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl md:col-span-7 md:row-span-2">
              <img
                src={Img9}
                alt="Grid 1"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>

            {/* 14 */}
            <div
              ref={gridRef4}
              className="flex items-center justify-center p-6 text-white shadow ring-1 ring-inset md:col-span-5 md:row-span-1 rounded-xl bg-gradient-to-r from-primary1 to-primary2"
            >
              <p className="text-4xl text-center ">
                <animated.span>
                  {animatedCounter4.number.to((n) => `${n.toFixed(0)}+`)}
                </animated.span>
              </p>
              <p className="px-12 text-4xl">|</p>
              <p className="text-lg text-center">
                Positive Feedback from <br /> Student
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
