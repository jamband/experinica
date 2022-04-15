import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Loading } from ".";

test("", () => {
  render(<Loading />);
  expect(screen.getByRole("status")).toBeInTheDocument();
});
