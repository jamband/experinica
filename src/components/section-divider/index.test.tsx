import { render, screen } from "@testing-library/react";
import { SectionDivider } from ".";

test("", () => {
  render(<SectionDivider />);

  expect(screen.getByRole("separator")).toBeInTheDocument();
});
