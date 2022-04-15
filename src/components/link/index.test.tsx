import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Link } from ".";
import { RouterMock } from "../../tests/router-mock";

test("to: /", () => {
  render(
    <RouterMock initialEntries={["/"]}>
      <Link to="/">Home</Link>);
    </RouterMock>
  );
  const link = screen.getByRole("link", { name: "Home" });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/");
});

test("to: /foo", () => {
  render(
    <RouterMock initialEntries={["/"]}>
      <Link to="/foo">Foo</Link>);
    </RouterMock>
  );
  const link = screen.getByRole("link", { name: "Foo" });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/foo");
});
