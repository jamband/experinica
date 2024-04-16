import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Icon } from ".";

test("", () => {
  render(
    <Icon className="foo" viewBox="0 0 20 20">
      icon
    </Icon>,
  );

  const icon = screen.getByText("icon");
  expect(icon).toHaveAttribute("viewBox", "0 0 20 20");
  expect(icon).toHaveClass("foo", { exact: true });
  expect(icon).not.toHaveAccessibleName("img");
  expect(icon).toHaveAttribute("role", "img");
  expect(icon).toHaveAttribute("aria-hidden", "true");
});
