import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders hello world as a text", () => {
  //Arrange
  render(<Greeting />);

  //Act
  //...noting

  //Assert
  const helloWorldElement = screen.getByText("Hello", { exact: false });
  expect(helloWorldElement).toBeInTheDocument();
});
