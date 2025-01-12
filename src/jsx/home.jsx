import "../css/home.css";
import Footer from "./footer";
import NavBar from "./navBar";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { SiDjango } from "react-icons/si";
// import { useState, useEffect } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
// constant
import { CV } from "../data/constant.js";
import { projects } from "../data/projects.js";

export default function Home() {
  //   const [cv, setCV] = useState();

  //   const fetchData = async () => {
  //     const url = "../data/project.json";
  //     await fetch(url)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setProject(data.project.reverse());
  //       })
  //       .catch((err) => console.log(err));
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  //   const fetchCV = async () => {
  //     const cvUrl =
  //       "https://api.sheety.co/5051b16289978df7d01b327c7ffe79e3/portFolioApi/cv";
  //     await axios
  //       .get(cvUrl)
  //       .then((res) => {
  //         setCV(res.data.cv);
  //         console.log(cv);
  //       })
  //       .catch((err) => console.log(err));
  //   };
  //   useEffect(() => {
  //     fetchCV();
  //   }, []);

  const [text] = useTypewriter({
    words: ["Web Development", "Mobile Development", "Machine Learning"],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 100,
  });

  return (
    <div className="background-container">
      <img
        src="home-intro-image.avif"
        className="home-intro-image"
        alt="home-intro-image"
      ></img>
      <NavBar></NavBar>

      <div className="introduce-words" id="home">
        <h1 className="introduce-words-name">Kaweewat Noisuwan</h1>
        <h2 className="introduce-words-doing">
          {" "}
          I'm interested in
          <span className="introduce-words-doing-typed"> {text}</span>
          <Cursor></Cursor>
        </h2>
      </div>

      <section className="home-aboutme" id="aboutme">
        <div className="home-aboutme-all-text-container">
          <div className="home-aboutme-text-container">
            <div className="home-aboutme-div">
              <h1 className="home-aboutme-title">ABOUT ME</h1>
              <p className="home-aboutme-text">
                Hello, my name is Kaweewat Noisuwan, I am currently studying in
                Digital engineering major at Sirindhorn international institute
                of technology (SIIT), Thammasat University. I have a charm on
                programming, especially on web development and mobile
                application. As a student who thrives at the intersection of
                technology and business, I dream of not just being a programmer,
                but a catalyst for change and innovation. My ultimate goal is to
                merge my technical prowess with a profound understanding of
                startups and innovation, steering my own ventures towards
                success.
              </p>
            </div>
            <div className="home-about-me-button-container">
              <Link
                to="/aboutme"
                className="home-aboutme-link"
                id="about-me-link"
              >
                <button className="home-aboutme-button">MORE ABOUT ME</button>
              </Link>

              <a href={CV} target="_blank" rel="noreferrer">
                <button className="home-aboutme-button" id="download-cv">
                  DOWNLOAD CV
                </button>
              </a>
            </div>
          </div>

          <div className="home-aboutme-skills">
            <h1 className="home-aboutme-title">SKILLS</h1>

            <div className="home-aboutme-skills-web-container">
              <Tippy content="JavaScript">
                <img
                  src="./image/javascript.png"
                  className="home-aboutme-skills-image-large"
                  alt="javascript"
                />
              </Tippy>
              <Tippy content="HTML">
                <img
                  src="./image/html.png"
                  className="home-aboutme-skills-image-large"
                  alt="html"
                />
              </Tippy>
              <Tippy content="CSS">
                <img
                  src="./image/css.png"
                  className="home-aboutme-skills-image-large"
                  alt="css"
                />
              </Tippy>
              <Tippy content="Python">
                <img
                  src="./image/python.png"
                  className="home-aboutme-skills-image-large"
                  alt="python"
                />
              </Tippy>
              <Tippy content="Java">
                <img
                  src="./image/java.png"
                  className="home-aboutme-skills-image"
                  alt="java"
                />
              </Tippy>
              <Tippy content="Go">
                <img
                  src="./image/go.png"
                  className="home-aboutme-skills-image-go"
                  alt="go"
                />
              </Tippy>
              <Tippy content="Reactjs">
                <img
                  src="./image/react.png"
                  className="home-aboutme-skills-image"
                  alt="react"
                />
              </Tippy>

              <Tippy content="Next.js">
                <img
                  src="./image/nextJS.svg"
                  className="home-aboutme-skills-image-go"
                  alt="NextJS"
                />
              </Tippy>

              <Tippy content="Expressjs">
                <img
                  src="./image/expressjs.png"
                  className="home-aboutme-skills-image"
                  alt="expressjs"
                />
              </Tippy>
              <Tippy content="Django">
                <p className="home-aboutme-skills-image">
                  <SiDjango></SiDjango>
                </p>
              </Tippy>
              <Tippy content="Git">
                <img
                  src="./image/git.png"
                  className="home-aboutme-skills-image"
                  alt="git"
                />
              </Tippy>
              <Tippy content="Github">
                <p className="home-aboutme-skills-image">
                  <BsGithub></BsGithub>
                </p>
              </Tippy>
              <Tippy content="Gitlab">
                <img
                  src="./image/gitlab.png"
                  className="home-aboutme-skills-image"
                  alt="gitlab"
                />
              </Tippy>
              <Tippy content="SQL">
                <img
                  src="./image/sql.png"
                  className="home-aboutme-skills-image"
                  alt="SQL"
                />
              </Tippy>
              <Tippy content="MongoDB">
                <img
                  src="./image/mongo.png"
                  className="home-aboutme-skills-image"
                  alt="mongo"
                />
              </Tippy>
              <Tippy content="Docker">
                <img
                  src="./image/docker.png"
                  className="home-aboutme-skills-image"
                  alt="docker"
                />
              </Tippy>
            </div>

            <div className="home-aboutme-skills-container">
              <div className="home-aboutme-skills-mobile-container">
                <Tippy content="JavaScript">
                  <img
                    src="./image/javascript.png"
                    className="home-aboutme-skills-image-large"
                    alt="javascript"
                  />
                </Tippy>
                <Tippy content="HTML">
                  <img
                    src="./image/html.png"
                    className="home-aboutme-skills-image-large"
                    alt="html"
                  />
                </Tippy>
                <Tippy content="CSS">
                  <img
                    src="./image/css.png"
                    className="home-aboutme-skills-image-large"
                    alt="css"
                  />
                </Tippy>
                <Tippy content="Python">
                  <img
                    src="./image/python.png"
                    className="home-aboutme-skills-image-large"
                    alt="python"
                  />
                </Tippy>
                <Tippy content="Java">
                  <img
                    src="./image/java.png"
                    className="home-aboutme-skills-image"
                    alt="java"
                  />
                </Tippy>
                <Tippy content="Go">
                  <img
                    src="./image/go.png"
                    className="home-aboutme-skills-image-go"
                    alt="go"
                  />
                </Tippy>
                <Tippy content="Reactjs">
                  <img
                    src="./image/react.png"
                    className="home-aboutme-skills-image"
                    alt="react"
                  />
                </Tippy>
              </div>

              <div className="home-aboutme-skills-mobile-container">
                <Tippy content="Next.js">
                  <img
                    src="./image/nextJS.svg"
                    className="home-aboutme-skills-image-go"
                    alt="nextJS"
                  />
                </Tippy>
                <Tippy content="Expressjs">
                  <img
                    src="./image/expressjs.png"
                    className="home-aboutme-skills-image"
                    alt="expressjs"
                  />
                </Tippy>
                <Tippy content="Django">
                  <p className="home-aboutme-skills-image">
                    <SiDjango></SiDjango>
                  </p>
                </Tippy>
                <Tippy content="Git">
                  <img
                    src="./image/git.png"
                    className="home-aboutme-skills-image"
                    alt="git"
                  />
                </Tippy>
                <Tippy content="Github">
                  <p className="home-aboutme-skills-image">
                    <BsGithub></BsGithub>
                  </p>
                </Tippy>
                <Tippy content="Gitlab">
                  <img
                    src="./image/gitlab.png"
                    className="home-aboutme-skills-image"
                    alt="gitlab"
                  />
                </Tippy>
                <Tippy content="SQL">
                  <img
                    src="./image/sql.png"
                    className="home-aboutme-skills-image"
                    alt="SQL"
                  />
                </Tippy>
              </div>

              <div className="home-aboutme-skills-mobile-container">
                <Tippy content="MongoDB">
                  <img
                    src="./image/mongo.png"
                    className="home-aboutme-skills-image"
                    alt="mongo"
                  />
                </Tippy>
                <Tippy content="Docker">
                  <img
                    src="./image/docker.png"
                    className="home-aboutme-skills-image"
                    alt="docker"
                  />
                </Tippy>
              </div>
            </div>
          </div>
        </div>

        <div
          className="home-aboutme-myimage"
          style={{ backgroundImage: `url("./image/MyPhoto.jpeg")` }}
        ></div>
      </section>

      <section className="home-project" id="project">
        <div className="home-project-title-link-div">
          <h1 className="home-project-title">PROJECTS</h1>
          <Link to="/project" className="home-project-seeAll">
            See all
          </Link>
        </div>
        <div className="home-project-all-container">
          {projects
            ?.slice(0, 6)
            .reverse()
            .map((res) => (
              <a
                href={res.githubLink}
                target="_blank"
                rel="noreferrer"
                className="home-project-github-link"
                key={res.id}
              >
                <div className="home-project-container">
                  <div
                    className="home-project-image"
                    style={{ backgroundImage: `url(${res.image})` }}
                  ></div>

                  <div className="home-project-text-container">
                    <h3 className="home-project-title">{res.name}</h3>
                    <p className="home-project-languages">{res.languages}</p>
                    <p className="home-project-description">
                      {res.description.substring(0, 250)}
                    </p>
                  </div>
                </div>
              </a>
            ))}
        </div>
      </section>

      <section className="home-contact" id="contact">
        <Footer></Footer>
      </section>
    </div>
  );
}
