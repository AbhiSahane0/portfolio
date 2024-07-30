import React from "react";
import "../App.css";

const ProjectBar = () => {
  return (
    <div id="Projects">
      <div className="flex items-center justify-center mt-8">
        <main className="w-full max-w-fit">
          <div className="p-4 rounded-lg flex items-center shadow-md">
            <span className="mr-4 text-2xl">Kepper App</span>
            <a
              className="nav-link mr-5"
              href="https://66179483b84dce53919d0d33--delicate-begonia-0beadd.netlify.app/"
            >
              Link
            </a>
            <span className=" text-left tracking-tight">
              Developed using React.js, the Note Keeper app showcases my
              front-end development skills, enabling users to efficiently
              create, edit, and delete notes. It features a user-friendly
              interface and responsive design for seamless use across devices
            </span>
          </div>
          <div className="p-4 rounded-lg flex items-center shadow-md">
            <span className="mr-4 text-2xl">Mapty App</span>
            <a
              className="nav-link mr-5"
              href="https://abhisahane0.github.io/Mapty-App/"
            >
              Link
            </a>
            <span className=" text-left tracking-tight">
              The Mapty app, developed with pure JavaScript and the Leaflet API,
              allows users to map locations and add tasks.In this project i have
              used Leafllet API , which gives me an great idea about
              implementing API's.
            </span>
          </div>

          <div className="p-4 rounded-lg flex items-center shadow-md">
            <span className="mr-4 text-2xl">Bankist App</span>
            <a
              className="nav-link mr-5"
              href="https://abhisahane0.github.io/Minimilist-App/"
            >
              Link
            </a>
            <span className=" text-left tracking-tight">
              The Bankist app, developed with pure JavaScript and advanced DOM
              manipulation techniques, offers users a seamless banking
              experience. This project showcases expertise in DOM manipulation
              and provides a comprehensive understanding of advanced DOM
              concepts.
            </span>
          </div>

          <div className="p-4 rounded-lg flex items-center shadow-md mt-2">
            <span className="mr-4 text-2xl">Skill Finder</span>
            <a
              className="nav-link mr-5"
              href="https://6615320a8ce70600a021d3e4--aesthetic-fudge-2b57c4.netlify.app/"
            >
              Link
            </a>
            <span className=" text-left tracking-tight">
              Skill Finder, built with React.js and Tailwind CSS, is a
              responsive web app showcasing frontend skills. It offers an
              intuitive interface for exploring various skills, ensuring
              accessibility and a user-friendly experience across devices.
            </span>
          </div>

          <div className="p-4 rounded-lg flex items-center shadow-md mt-2">
            <span className="mr-4 text-2xl">Tindog Website Clone</span>
            <a
              className="nav-link mr-5"
              href="https://abhisahane0.github.io/tindogProjecfile/"
            >
              Link
            </a>
            <span className=" text-left tracking-tight">
              In this project, I replicated the well-known website called
              Tindog, emphasizing the importance of a responsive design. To
              achieve this, I used HTML ,CSS, Bootstrap to ensure the
              adaptability of my webpage.
            </span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProjectBar;
