import { render } from "@testing-library/react";

import App from "../../pages/_app";

describe("App", () => {
  it("should work as expected", () => {
    render(<App />);
    expect(1 + 1).toBe(2);
  });
});