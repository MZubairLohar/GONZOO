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

export default function First() {
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
    <div className="w-full h-full px-10 py-16 pt-32 bg-[#6c83d6] flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl items-center">
        {/* Content Section */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-gray-900 font-extrabold tracking-wide text-4xl lg:text-5xl">
            <span className="block text-[#0a6999]">Gonzo</span>
            <span className="block text-white">Treasure</span>
          </h1>
          <p className="text-black font-medium text-lg lg:text-xl">
            Hodl it to Get Rich. Introducing Treasure of Gonzo, the most
            meme-worthy memecoin in the galaxy. It's time for Gonzo to show the
            world who is the greatest meme coin that ever existed!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#_"
              className="flex  items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#0a6999] rounded-md hover:bg-[#818dc7] "
            >
              How To Buy
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="/trade"
              className="flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#f8b447] rounded-md hover:bg-[#a10d25]"
            >
              Buy Now
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div
          className="relative w-full max-w-md mx-auto transform transition-transform duration-300 ease-out "
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          }}
        >
          <img
            src="https://getdrawings.com/cliparts/the-muppets-clipart-26.gif"
            alt="Gonzo Treasure"
            className="w-full h-auto drop-shadow-xl "
          />
        </div>
      </div>
    </div>
  );
}
