import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route} from 'react-router-dom';
import Home from "./jsx/home"
import AboutMe from "./jsx/aboutMe"
import Project from "./jsx/project"
import Contact from './jsx/contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
        <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/aboutme" exact element={<AboutMe/>}></Route>
        <Route path="/project" exact element={<Project/>}></Route>
        <Route path="/contact" exact element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
);

