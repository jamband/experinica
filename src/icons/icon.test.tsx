import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Icon } from "./icon";

test("fill: undefined", () => {
  render(
    <Icon className="h-5 w-5" role="img">
      {}
    </Icon>
  );
  const img = screen.getByRole("img");
  expect(img).toHaveAttribute("fill", "currentColor");
});

test("fill: none", () => {
  render(
    <Icon className="h-5 w-5" fill="none" role="img">
      {}
    </Icon>
  );
  const img = screen.getByRole("img");
  expect(img).toHaveAttribute("fill", "none");
});
