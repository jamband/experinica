import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { BackToHome } from ".";
import { RouterMock } from "../../tests/router-mock";

test("", () => {
  render(
    <RouterMock initialEntries={["/"]}>
      <BackToHome />
    </RouterMock>
  );
  const link = screen.getByRole("link", { name: "← Back to Home" });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/");
});
