import { ReactLocation, Router } from "@tanstack/react-location";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Link } from ".";

test("to: /", () => {
  render(
    <Router location={new ReactLocation()} routes={[]}>
      <Link to="/">Home</Link>);
    </Router>
  );
  const link = screen.getByRole("link", { name: "Home" });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/");
});

test("to: /foo", () => {
  render(
    <Router location={new ReactLocation()} routes={[]}>
      <Link to="/foo">Foo</Link>);
    </Router>
  );
  const link = screen.getByRole("link", { name: "Foo" });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/foo");
});
