import { ReactLocation, Router } from "@tanstack/react-location";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Header } from ".";
import { APP_NAME } from "../../constants/app";

test("", () => {
  render(
    <Router location={new ReactLocation()} routes={[]}>
      <Header />
    </Router>
  );
  const link = screen.getByRole("link");
  expect(link).toHaveAttribute("href", "/");
  expect(link).toHaveTextContent(`jamband/${APP_NAME.toLowerCase()}`);
});
