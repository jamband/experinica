import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { TapeHeader } from ".";

test("", () => {
  render(<TapeHeader title="Foo" />);

  expect(screen.getByRole("heading", { name: "Foo" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "PlusArchive" })).toBeInTheDocument();
});
