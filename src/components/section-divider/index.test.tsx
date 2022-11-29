import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { SectionDivider } from ".";

test("", () => {
  render(<SectionDivider />);

  expect(screen.getByRole("separator")).toBeInTheDocument();
});
