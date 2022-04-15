import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Page } from ".";
import { APP_NAME } from "../../constants/app";

test("title: ''", () => {
  render(
    <Page title="">
      <h1>Home</h1>
    </Page>
  );
  expect(document.title).toBe(APP_NAME);
  expect(screen.getByRole("heading", { name: "Home" })).toBeInTheDocument();
});

test("title: Foo", () => {
  render(
    <Page title="Foo">
      <h1>Foo</h1>
    </Page>
  );
  expect(document.title).toBe(`Foo ･ ${APP_NAME}`);
  expect(screen.getByRole("heading", { name: "Foo" })).toBeInTheDocument();
});
