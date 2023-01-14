import { render, screen } from "@testing-library/react";
import { Loading } from ".";

test("", () => {
  render(<Loading />);

  expect(screen.getByRole("status")).toBeInTheDocument();
});
