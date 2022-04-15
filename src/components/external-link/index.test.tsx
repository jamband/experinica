import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { ExternalLink } from ".";

test("", () => {
  render(<ExternalLink href="https://example.com">foo</ExternalLink>);
  const link = screen.getByRole("link");
  expect(link).toHaveTextContent("foo");
  expect(link).toHaveAttribute("rel", "noopener noreferrer");
  expect(link).toHaveAttribute("target", "_blank");
});
