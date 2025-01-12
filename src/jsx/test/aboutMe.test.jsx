import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import AboutMe from "../aboutMe";

test("renders About Me page", () => {
  render(
    <MemoryRouter>
      <AboutMe />
    </MemoryRouter>
  );

  // Check for the presence of the main title
  const mainTitleElements = screen.getAllByText("ABOUT ME");
  expect(mainTitleElements[1]).toBeInTheDocument();

  // Check for the presence of the education section
  expect(screen.getByText("EDUCATION")).toBeInTheDocument();

  // Check for the presence of the work experience section
  expect(screen.getByText("WORK EXPERIENCE")).toBeInTheDocument();

  // Check for the presence of the interests section
  expect(screen.getByText("MY INTERESTS")).toBeInTheDocument();

  // Check for the presence of specific text in the about me section
  expect(
    screen.getByText(/Hello, my name is Kaweewat Noisuwan/i)
  ).toBeInTheDocument();

  // Check for the presence of the image with alt text "myImage"
  const myImage = screen.getByAltText("myImage");
  expect(myImage).toBeInTheDocument();
  expect(myImage).toHaveAttribute("src", "./image/MyPhoto.jpeg");

  // Check for the presence of the SIIT logo
  const siitLogo = screen.getByAltText("siitLogo");
  expect(siitLogo).toBeInTheDocument();
  expect(siitLogo).toHaveAttribute("src", "./image/siitlogo.png");

  // Check for the presence of the KKW logo
  const kkwLogo = screen.getByAltText("kkwLogo");
  expect(kkwLogo).toBeInTheDocument();
  expect(kkwLogo).toHaveAttribute("src", "./image/KKWLogo.png");

  // Check for the presence of the NECTEC logo
  const nectecLogo = screen.getByAltText("nectecLogo");
  expect(nectecLogo).toBeInTheDocument();
  expect(nectecLogo).toHaveAttribute("src", "./image/nectec.svg");

  // Check for the presence of the web development interest
  const webDevInterest = screen.getByAltText("webDevelopment");
  expect(webDevInterest).toBeInTheDocument();
  expect(webDevInterest).toHaveAttribute("src", "./image/webDevelopment.webp");

  // Check for the presence of the mobile development interest
  const mobileDevInterest = screen.getByAltText("mobileDevelopment");
  expect(mobileDevInterest).toBeInTheDocument();
  expect(mobileDevInterest).toHaveAttribute(
    "src",
    "./image/mobileDevelopment.jpeg"
  );

  // Check for the presence of the machine learning interest
  const mlInterest = screen.getByAltText("Machine Learning");
  expect(mlInterest).toBeInTheDocument();
  expect(mlInterest).toHaveAttribute("src", "./image/machineLearning.avif");
});
