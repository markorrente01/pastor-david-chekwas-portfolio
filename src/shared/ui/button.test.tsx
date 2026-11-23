import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./button";

describe("Button", () => {
  it("renders its children", () => {
    render(<Button>Bring David to your stage</Button>);

    expect(
      screen.getByRole("button", {
        name: "Bring David to your stage",
      }),
    ).toBeInTheDocument();
  });

  it("supports the disabled state", () => {
    render(<Button disabled>Submit</Button>);

    expect(screen.getByRole("button")).toBeDisabled();
  });
});
