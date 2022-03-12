import * as React from "react";
import * as ReactDOM from "react-dom";
import { ShowQuestion } from "../QuizApp";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

describe("quiz", () => {
  it("show questions", async () => {
    const quiz = () => ({
      id: 976,
      question:
        'What is the correct syntax for referring to an external script called "xxx.js"?',
      answers: {
        answer_a: '<script name="xxx.js">',
        answer_b: '<script src="xxx.js">',
        answer_c: '<script href="xxx.js">',
        answer_d: '<script declare="xxx.js">',
        answer_e: null,
        answer_f: null,
      },
    });

    const element = document.createElement("div");

    await act(async () => {
      await ReactDOM.render(
        <MemoryRouter>
          <ShowQuestion question={quiz()} />
        </MemoryRouter>,
        element
      );
    });
    expect(element.innerHTML).toMatchSnapshot();
  });
});
