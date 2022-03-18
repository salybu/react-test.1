import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  const lintTest = screen.getByRole("button", {
    name: "lintTest",
  });

  // expect(lintTest.textContent).toBe('lintTest') // 이 라인에 빨간 줄 에러 뜨는 것으로 Lint 가 적용되었는지 확인, quickfix 하면 아래에 있는 코드로 변경됨
  expect(lintTest).toHaveTextContent("lintTest");
});
