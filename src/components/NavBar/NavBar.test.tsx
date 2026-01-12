import { render } from "@testing-library/react";
import { test } from "vitest";
import { NavBar } from "./NavBar";

test("loads NavBar and is rendered", async () => {
  // ARRANGE
  render(<NavBar items={[]} />);

  // ACT
  // await userEvent.click(screen.getByText('Load Greeting'))
  // await screen.findByRole('heading')

  // ASSERT
  // expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  // expect(screen.getByRole('button')).toBeDisabled()
});
