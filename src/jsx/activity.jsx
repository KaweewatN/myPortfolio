import "../css/activity.css";
import NavBar from "./navBar.jsx";
import Footer from "./footer.jsx";
import { useState, useEffect } from "react";
import activities from "../data/activities.js";

export default function Activity() {
  const [numActivity, getNumActivity] = useState(6);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setInterval(() => {
        getNumActivity((prev) => prev + 3);
      }, 500);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <div className="activity-title-container">
        <h2 className="activity-title">ALL ACTIVITIES</h2>
      </div>

      <div className="activity-all-container">
        {activities
          ?.slice(-numActivity)
          .reverse()
          .map((res) => (
            <div className="activity-container">
              <div
                className="activity-image"
                style={{ backgroundImage: `url(${res.image})` }}
              ></div>

              <div className="activity-text-container">
                <h3 className="activity-title">{res.name}</h3>
              </div>
            </div>
          ))}
      </div>
      <Footer></Footer>
    </div>
  );
}
