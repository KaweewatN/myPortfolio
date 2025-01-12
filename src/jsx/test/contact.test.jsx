import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import this to use toBeInTheDocument
import Contact from "../contact";
import { BrowserRouter } from "react-router-dom";

test("renders contact form", () => {
  render(
    <BrowserRouter>
      <Contact />
    </BrowserRouter>
  );

  // Check if NavBar is rendered
  expect(
    screen.getByText(/You can contact me by this form/i)
  ).toBeInTheDocument();

  // Check if form inputs are rendered
  expect(
    screen.getByRole("heading", { name: /you can contact me by this form/i })
  ).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Name-Surname/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Subject/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Message/i)).toBeInTheDocument();

  // Check if submit button is rendered
  expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();

  // Check navbar is rendered
  expect(screen.getByText(/ABOUT ME/i)).toBeInTheDocument();
  expect(screen.getByText(/PROJECTS/i)).toBeInTheDocument();
  expect(screen.getAllByText(/CONTACT/i)[0]).toBeInTheDocument();

  // Check if Footer is rendered
  expect(
    screen.getByText(/© 2023 Kaweewat.netlify.app All rights reserved./i)
  ).toBeInTheDocument();
});
