import React from "react";
import ReactDOM from "react-dom";
import { FrontPage } from "../components/FrontPage";
import { MemoryRouter } from "react-router-dom";

describe("FrontPage", () => {
  it("shows FrontPage", () => {
    const element = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <FrontPage />
      </MemoryRouter>,
      element
    );
    expect(element.querySelector("h1").innerHTML).toEqual("Welcome to Quiz");
    expect(element.innerHTML).toMatchSnapshot();
  });
});
