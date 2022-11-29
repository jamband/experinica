import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { BackToHome } from ".";

test("", () => {
  render(<BackToHome />);

  const link = screen.getByRole("link", { name: "← Back to Home" });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/");
});
