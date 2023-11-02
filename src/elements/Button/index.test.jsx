import React from "react";

import { render } from "@testing-library/react";
import Button from "./index";
import { expect, test } from "vitest";
import { BrowserRouter as Router } from "react-router-dom";

test("Should not allowed click button if isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Should isLoading present render loading/spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();

  expect(container.querySelector("span")).toBeInTheDocument();
});

test("Should button type link & external render tag <a>", () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("Should button type link & internal render <Link> component", () => {
  const { container } = render(
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});
