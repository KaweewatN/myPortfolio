import "../css/project.css";
import NavBar from "./navBar";
import Footer from "./footer";
import { useState, useEffect } from "react";
// import axios from "axios";
import { projects } from "../data/projects.js";

export default function Project() {
  //   const [project, setProject] = useState();
  const [numProject, getNumProject] = useState(6);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setInterval(() => {
        getNumProject((prev) => prev + 3);
      }, 500);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //   const fetchData = async () => {
  //     const projectUrl =
  //       "https://api.sheety.co/5051b16289978df7d01b327c7ffe79e3/portFolioApi/project";
  //     await axios
  //       .get(projectUrl)
  //       .then((res) => {
  //         setProject(res.data.project.reverse());
  //       })
  //       .catch((err) => console.log(err));
  //   };
  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  return (
    <div>
      <NavBar></NavBar>
      <div className="project-title-container">
        <h2 className="project-title">ALL PROJECTS</h2>
      </div>

      <div className="project-all-container">
        {projects
          ?.slice(-numProject)
          .reverse()
          .map((res) => (
            <a
              href={res.githubLink}
              target="_blank"
              rel="noreferrer"
              className="project-github-link"
              key={res.id}
            >
              <div className="project-container">
                <div
                  className="project-image"
                  style={{ backgroundImage: `url(${res.image})` }}
                ></div>

                <div className="project-text-container">
                  <h3 className="project-title">{res.name}</h3>
                  <p className="project-languages">{res.languages}</p>
                  <p className="project-description">
                    {res.description.substring(0, 250)}
                  </p>
                </div>
              </div>
            </a>
          ))}
      </div>
      <Footer></Footer>
    </div>
  );
}
