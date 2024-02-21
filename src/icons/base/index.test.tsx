import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Icon } from ".";

test("", () => {
  render(
    <Icon className="foo" viewBox="0 0 20 20">
      icon
    </Icon>,
  );

  const imageElement = screen.getByText("icon");
  expect(imageElement).toHaveAttribute("viewBox", "0 0 20 20");
  expect(imageElement).toHaveClass("foo", { exact: true });
  expect(imageElement).not.toHaveAccessibleName("img");
  expect(imageElement).toHaveAttribute("role", "img");
  expect(imageElement).toHaveAttribute("aria-hidden", "true");
});
