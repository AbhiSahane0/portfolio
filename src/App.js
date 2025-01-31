import "./App.css";
import "./index.css";
import img from "./Images/boy-logo.png";
import Navbar from "./component/Navbar";
import ProjectBar from "./component/ProjectBars";

function App() {
  return (
    <>
      <div className="top-container">
        <Navbar />
        <img className="logo-1" src={img} alt="logo-img" />
        <h1 className="my-name">I'm Abhijit.</h1>
        <p className="my-profesion">A Web Developer.</p>
      </div>
      <hr />
      <div className="work-container">
        <h2 className="work-title">About Me.</h2>
        <div className="education">
          {/* <img
            className="education-logo"
            src="/Images/education-logo.png"
            alt="education-logo"
          /> */}
          <h2 className="education-heading" id="Education">
            Education.
          </h2>
          <p className="education-info">
            I am a final-year Computer Science student, with an expected
            graduation in Year 2025. I am deeply passionate about web
            development and constantly seek to learn new technologies to
            implement them in solving real-world problems. Throughout my
            academic journey, I have focused on web development Mostly on
            Frontend Development and blockchain technology. I have developed
            multiple web applications. I have consistently participated in
            hackathons and coding competitions. Additionally,I have completed
            internship with notable tech companie, further enhancing my skills
            and practical experience in the field.
          </p>
        </div>
        <div className="work-info">
          {/* <img
            className="code-icon"
            src="/Images/code-icon.png"
            alt="code-icon"
          /> */}
          <h3 className="design-title" id="Project">
            Skills.(The most Important thing.)
          </h3>
          <p className="project-info">
            I am a skilled frontend developer with good knowledge of Backend,
            APIs, and Databases. I know HTML, CSS, and JavaScript which are the
            basic technologies. Additionally, I am skilled in React.js, Redux,
            TypeScript, Tailwind CSS, Bootstrap, jQuery, Rest API's and other
            Frontend Technologies.
          </p>
        </div>
      </div>
      <div className="project">
        {/* <img
          className="project-logo"
          src="/Images/project-logo.png"
          alt="project-logo"
        /> */}
        <h3 className="project-title">My Projects</h3>
        <p className="project-info" id="Experence">
          During my previous internship as a Frontend Developer Intern, I
          collaborated with multiple developers on a Bitcoin transaction
          website. In this project, I utilized React.js, Tailwind CSS, and
          Material UI to build a responsive and user-friendly interface. This
          experience enhanced my teamwork and technical skills. I have worked
          with Git and GitHub to collaborate effectively on various projects.
          Apart from this, I have developed various other projects, including
          portfolio websites, and small-scale React projects, also showcasing my
          ability to adapt and innovate in different environments.Below are my
          some of Project Links and some still developing (:
        </p>
        <ProjectBar />
      </div>
      <hr />
      <h1 className="get-in-touch" id="ContactMe">
        Get In Touch
      </h1>
      <a className="btn" href="mailto:cloudabhi123@gmail.com">
        Contact Me.
      </a>
      <div className="fotter" id="fotter">
        <a className="contact" href="#">
          Linkedin
        </a>
        <a className="contact" href="#">
          Twitter
        </a>
        <a className="contact" href="#">
          Discord
        </a>
        <a className="contact" href="nav">
          Mail[cloudabhi123@gmail.com]
        </a>
        <a className="contact" href="https://github.com/AbhiSahane0">
          GitHub↗️
        </a>
        <p className="copyright">
          © All rights reserved @ Abhijit Rajaram Sahane.
        </p>
      </div>
    </>
  );
}

export default App;
