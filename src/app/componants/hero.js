"use client";
import { useState, useCallback } from "react";

function throttle(func, delay) {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

export default function Hero() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback(
    throttle((e) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 7;
      const rotateY = (centerX - x) / 7;

      setRotate({ x: rotateX, y: rotateY });
    }, 100),
    []
  );

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };
  return (
    <div>
      <section className="px-2 py-32 bg-white md:px-0 border-b-4 border-double border-black font-custom">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-wide text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline font-custom font-normal tracking-wider text-[#0a6999]">
                    Gonzo
                  </span>
                  {/* <span className="block xl:inline text-gray-600">'s</span> */}

                  <span className="block text-[#919ac9] tracking-wide xl:inline">
                    Treasure{" "}
                  </span>
                </h1>
                <p className="mx-auto text-base font-sans font-extrabold text-black sm:max-w-md lg:text-xl md:max-w-3xl">
                 Hodl it to Get Rich. Introducing Treasure of Gonzo, the most meme-worthy memecoin in the galaxy. We allowed everyone to shoot their shot, but now its time for Gonzo to show the world who is the greatest meme coin that ever existed!
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <a
                    href="#_"
                    className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white tracking-wide bg-[#0a6999] rounded-md sm:mb-0 hover:bg-[#818dc7] sm:w-auto"
                  >
                    How To Buy
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                  <a
                    href="/trade"
                    className="flex items-center px-6 py-3 text-white bg-[#f8b447] rounded-md hover:bg-[#a10d25] tracking-wide hover:text-white"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 relative ">
              <div
                className="w-full h-auto overflow-hidden relative bg-transparent transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform "
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                style={{
                  transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
                  transition:
                    "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
                }}
              >
                <div className="pulse absolute -inset-2 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-75 blur-xl z-20" />
                {/* <img src="https://getdrawings.com/cliparts/the-muppets-clipart-26.gif" className=" relative flex h-full w-full select-none items-center z-20"/> */}
              </div>
              <div
                className="w-full h-auto overflow-hidden  relative bg-transparent transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform "
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                style={{
                  transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
                  transition:
                    "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
                }}
              >
                {/* <div className="pulse absolute -inset-2 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-75 blur-xl z-10" /> */}
                <img
                  src="https://getdrawings.com/cliparts/the-muppets-clipart-26.gif"
                  className=" relative flex h-full w-full select-none items-center z-30 drop-shadow-sm "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    //     <div
    //         className="card relative h-52 w-52 rounded-xl bg-white transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform"
    //         onMouseMove={onMouseMove}
    //         onMouseLeave={onMouseLeave}
    //         style={{
    //         transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
    //         transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
    //         }}
    //     >
    //         <div className="pulse absolute -inset-2 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-75 blur-xl" />
    //         <div className="relative flex h-full w-full select-none items-center justify-center rounded-lg bg-slate-900 text-sm font-light text-slate-300">
    //         hover me
    //         </div>
    //   </div>
  );
}
