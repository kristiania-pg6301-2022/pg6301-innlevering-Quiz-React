import React from "react";
import { Link } from "react-router-dom";

export function FrontPage() {
  return (
    <div>
      <div>
        <h1>Welcome to Quiz</h1>
        <h3>Choice</h3>
      </div>
      <div>
        <Link to="/newQuestion">
          <button>Take quiz</button>
        </Link>
        <Link to="/result">
          <button>Show result</button>
        </Link>
      </div>
    </div>
  );
}
