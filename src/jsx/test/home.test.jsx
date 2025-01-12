import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import this to use toBeInTheDocument
import Home from "../home";
import { BrowserRouter } from "react-router-dom";

test("renders home page", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  // Check if NavBar is rendered
  expect(screen.getAllByText(/ABOUT ME/i)[0]).toBeInTheDocument();
  expect(screen.getAllByText(/PROJECTS/i)[0]).toBeInTheDocument();
  expect(screen.getAllByText(/CONTACT/i)[0]).toBeInTheDocument();

  // Check if introduce words section is rendered
  expect(screen.getAllByText(/Kaweewat Noisuwan/i)[0]).toBeInTheDocument();
  expect(screen.getByText(/I'm interested in/i)).toBeInTheDocument();

  // Check if about me section is rendered
  expect(screen.getAllByText(/ABOUT ME/i)[0]).toBeInTheDocument();
  expect(
    screen.getByText(/Hello, my name is Kaweewat Noisuwan/i)
  ).toBeInTheDocument();

  // Check if skills section is rendered
  expect(screen.getByText(/SKILLS/i)).toBeInTheDocument();
  expect(screen.getAllByRole("img").length).toBeGreaterThan(0);

  // Check if projects section is rendered
  expect(screen.getAllByText(/PROJECTS/i)[0]).toBeInTheDocument();
  expect(screen.getByText(/See all/i)).toBeInTheDocument();

  // Check if download CV button is rendered
  expect(screen.getByText(/DOWNLOAD CV/i)).toBeInTheDocument();

  // Check if more about me button is rendered
  expect(screen.getByText(/MORE ABOUT ME/i)).toBeInTheDocument();
});
