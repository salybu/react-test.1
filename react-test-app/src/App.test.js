import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("the counter starts at 0", () => {
  render(<App />); // App component 를 렌더링
  const counterElement = screen.getByTestId("counter");
  // ID 가 'counter' 인 counterElement 상수를 생성함. screen object 를 이용해서 원하는 element 에 접근 (접근할 때 ID 로)
  expect(counterElement).toHaveTextContent(0);
  // counter Element 시작하는 값이 0 이어야 함. ID 가 counter 인 엘레먼트의 텍스트가 0 인지 테스트
});

test("minus button has correct text", () => {
  render(<App />);
  const btnElement = screen.getByTestId("minus-button");
  expect(btnElement).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  render(<App />);
  const btnElement = screen.getByTestId("plus-button");
  expect(btnElement).toHaveTextContent("+");
});

test("When the + button is pressed, the counter changes to 1", () => {
  render(<App />);
  const btnElement = screen.getByTestId("plus-button");
  fireEvent.click(btnElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});

test("When the - button is pressed, the counter changes to -1", () => {
  // 원래 0 으로 돼 있으니까 -1 해야 됨
  render(<App />);
  const btnElement = screen.getByTestId("minus-button");
  fireEvent.click(btnElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(-1);
});
