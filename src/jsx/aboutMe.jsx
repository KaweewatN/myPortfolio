import "../css/aboutMe.css";
import NavBar from "./navBar";
import Footer from "./footer";
import { ABOUT_ME_TEXT } from "../data/constant.js";

export default function AboutMe() {
  return (
    <div className="about-me-all-conatianer">
      <NavBar></NavBar>

      <section className="about-me-section">
        <div className="about-me-title-container">
          <h1 className="about-me-title">ABOUT ME</h1>
        </div>

        <div className="about-me-div">
          <p className="aboutme-text">{ABOUT_ME_TEXT}</p>
          <img
            src="./image/MyPhoto.jpeg"
            alt="myImage"
            className="about-me-image"
          />
        </div>

        <h2 className="about-me-edu-title">EDUCATION</h2>
        <hr className="horizontal-line"></hr>

        <div className="about-me-edu-container">
          <div className="about-me-edu-school-container">
            <img
              src="./image/siitlogo.png"
              alt="siitLogo"
              id="about-me-edu-siit"
            />
            <div className="about-me-edu-text">
              <h2>Sirindhorn International Institute of Technology (SIIT)</h2>
              <h3>Digital Engineering</h3>
              <p>2022 - present</p>
            </div>
          </div>

          <div className="about-me-edu-school-container" id="kkw-container">
            <img
              src="./image/KKWLogo.png"
              alt="kkwLogo"
              id="about-me-edu-kkw"
            />
            <div className="about-me-edu-text" id="kkw-text">
              <h2>KhonKaen Wittayayon School</h2>
              <h3>Mathematics and Science Program (Gifted)</h3>
              <p>2016 - 2022</p>
            </div>
          </div>
        </div>

        <h1 className="about-me-work-title">WORK EXPERIENCE</h1>
        <hr className="horizontal-line"></hr>

        <div className="about-me-edu-container">
          <div className="about-me-edu-school-container">
            <img
              src="./image/nectec.svg"
              alt="nectecLogo"
              id="about-me-work-nectec"
            />
            <div className="about-me-edu-text">
              <h2>
                National Electronics and Computer Technology Center (NECTEC)
              </h2>
              <h3>Speech and Text Understanding Research Team (STU)</h3>
              <p>June - July 2023</p>
            </div>
          </div>

          <div className="about-me-edu-school-container">
            <img
              src="./image/mfec.png"
              alt="mfecLogo"
              id="about-me-work-mfec"
            />
            <div className="about-me-edu-text">
              <h2>MFEC Public Company Limited</h2>
              <h3>Software Developer Team</h3>
              <p>June - August 2024</p>
            </div>
          </div>
        </div>

        <h1 className="about-me-interest-title">MY INTERESTS</h1>
        <hr className="horizontal-line"></hr>
        <div className="about-me-interest-all-container">
          <div className="about-me-interst-sub-container">
            <img
              className="about-me-interst-image"
              src="./image/webDevelopment.webp"
              alt="webDevelopment"
            />
            <h3 className="about-me-interst-text">Web Development</h3>
          </div>

          <div className="about-me-interst-sub-container">
            <img
              className="about-me-interst-image"
              src="./image/mobileDevelopment.jpeg"
              alt="mobileDevelopment"
            />
            <h3 className="about-me-interst-text">Mobile Development</h3>
          </div>

          <div className="about-me-interst-sub-container">
            <img
              className="about-me-interst-image"
              src="./image/machineLearning.avif"
              alt="Machine Learning"
            />
            <h3 className="about-me-interst-text"> Machine Learning </h3>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}
