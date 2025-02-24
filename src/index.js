import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./jsx/home.jsx";
import AboutMe from "./jsx/aboutMe.jsx";
import Project from "./jsx/project.jsx";
import Contact from "./jsx/contact.jsx";
import Activity from "./jsx/activity.jsx";
import ScrollToTop from "./jsx/components/scrolltoTop.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
      <Route path="/aboutme" exact element={<AboutMe />}></Route>
      <Route path="/project" exact element={<Project />}></Route>
      <Route path="/contact" exact element={<Contact />}></Route>
      <Route path="/activity" exact element={<Activity />}></Route>
    </Routes>
  </BrowserRouter>
);
