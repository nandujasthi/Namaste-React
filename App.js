import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "parent", dataattr: "test" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "HELLO WORLD!"),
    React.createElement("h2", {}, "HELLO WORLD!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "HELLO WORLD! 2"),
    React.createElement("h2", {}, "HELLO WORLD! 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
