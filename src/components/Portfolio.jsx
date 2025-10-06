import React from "react";
import assets from "../assets/asset";

const Portfolio = () => {
  const portfolios = [
    { id: 1, src: assets.Ecommimg, demo: "#", code: "#" },
    { id: 2, src: assets.Ecommimg, demo: "#", code: "#" },
    { id: 3, src: assets.Ecommimg, demo: "#", code: "#" },
    { id: 4, src: assets.Ecommimg, demo: "#", code: "#" },
    { id: 5, src: assets.Ecommimg, demo: "#", code: "#" },
    { id: 6, src: assets.Ecommimg, demo: "#", code: "#" },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Some of my recent works</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
              <img
                src={src}
                alt="project"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={code} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
