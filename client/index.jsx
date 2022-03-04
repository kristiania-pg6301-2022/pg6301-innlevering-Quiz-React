import React from "react";
import ReactDOM from "react-dom";

function FrontPage() {
  return (
    <div>
      <h1>Welcome to Quiz</h1>
      <h3>Choice</h3>
    </div>
  );
}

ReactDOM.render(<FrontPage />, document.getElementById("app"));
