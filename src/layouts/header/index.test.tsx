import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Header } from ".";
import { APP_NAME } from "../../constants/app";
import { RouterMock } from "../../tests/router-mock";

test("", () => {
  render(
    <RouterMock initialEntries={["/"]}>
      <Header />
    </RouterMock>
  );
  const link = screen.getByRole("link");
  expect(link).toHaveAttribute("href", "/");
  expect(link).toHaveTextContent(`jamband/${APP_NAME.toLowerCase()}`);
});
