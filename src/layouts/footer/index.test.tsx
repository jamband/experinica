import { ReactLocation, Router } from "@tanstack/react-location";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Footer } from ".";
import { APP_NAME } from "../../constants/app";

test("", () => {
  render(
    <Router location={new ReactLocation()} routes={[]}>
      <Footer />
    </Router>
  );
  const links = screen.getAllByRole("link");
  expect(links.length).toBe(3);
  expect(links[0]).toHaveAttribute("href", "/about");
  expect(links[0]).toHaveTextContent("About");
  expect(links[1]).toHaveAttribute("href", "/contact");
  expect(links[1]).toHaveTextContent("Contact");
  expect(links[2]).toHaveAttribute(
    "href",
    `https://github.com/jamband/${APP_NAME.toLowerCase()}`
  );
  expect(links[2]).toHaveTextContent("GitHub");
});
