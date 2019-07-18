// @jsx jsx
import React from "react";
import ReactDOM from "react-dom";
import { jsx, Global } from "@emotion/core";
import Joke from "./joke";
import Favorites from "./favorites";
import { FavoritesProvider } from "./hooks";

function App() {
  return (
    <>
      <Global
        styles={{
          body: {
            background: "#1A202C",
            color: "white",
            html: {
              boxSizing: "border-box"
            },
            "*, *:before, *:after": {
              boxSizing: "inherit"
            }
          }
        }}
      />
      <FavoritesProvider>
        <Joke />
        <Favorites />
      </FavoritesProvider>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
