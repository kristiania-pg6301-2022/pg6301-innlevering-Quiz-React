import React from "react";
import ReactDOM from "react-dom";

function FrontPage() {
  return (
    <div>
      <div>
        <h1>Welcome to Quiz</h1>
        <h3>Choice</h3>
      </div>
      <div>
        <button>Take quiz</button>
        <button>Result</button>
      </div>
    </div>
  );
}

ReactDOM.render(<FrontPage />, document.getElementById("app"));
