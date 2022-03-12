import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";

import { Application } from "../application";

describe("Application", () => {
  it("shows Application Routes", () => {
    const element = document.createElement("div");
    ReactDOM.render(<Application />, element);
    expect(element.innerHTML).toMatchSnapshot();
  });
});
