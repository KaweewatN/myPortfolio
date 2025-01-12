import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import this to use toBeInTheDocument
import Project from "../project";
import { BrowserRouter } from "react-router-dom";
import { projects } from "../../data/projects.js";

test("renders project page", () => {
  render(
    <BrowserRouter>
      <Project />
    </BrowserRouter>
  );

  // Check if NavBar is rendered
  expect(screen.getByText(/ABOUT ME/i)).toBeInTheDocument();
  expect(screen.getAllByText(/PROJECTS/i)[0]).toBeInTheDocument();
  expect(screen.getAllByText(/CONTACT/i)[0]).toBeInTheDocument();

  // Check if project title is rendered
  expect(screen.getByText(/ALL PROJECTS/i)).toBeInTheDocument();

  // Check if Footer is rendered
  expect(
    screen.getByText(/© 2023 Kaweewat.netlify.app All rights reserved./i)
  ).toBeInTheDocument();
});
