// @jsx jsx
import { jsx } from "@emotion/core";
import React from "react";
import { FavoritesContext } from "./hooks";
import Heart from "react-feather/dist/icons/heart";
import Delete from "react-feather/dist/icons/x-circle";

const styles = {
  container: {
    fontSize: 16,
    fontFamily: "monospace",
    color: "white",
    display: "flex",
    flexDirection: "column",
    maxWidth: 450,
    margin: "0 auto",
    marginTop: 15
  }
};

export default () => {
  var { favs, removeFav } = React.useContext(FavoritesContext);
  var favArray = Object.values(favs);
  return (
    <div css={styles.container}>
      <p css={{ textTransform: "uppercase" }}>Favorites:</p>

      <div
        css={{
          background: "#2D3748",
          padding: "0px 30px",
          borderRadius: 6,
          display: "flex",
          flexDirection: "column"
        }}
      >
        {favArray.length > 0 ? (
          favArray.map((x, i) => (
            <div key={x.id} css={{ display: "flex", alignItems: "center" }}>
              <p
                css={{
                  padding: "30px 0",
                  margin: 0,
                  borderBottom:
                    favArray.length !== i + 1 && "2px dashed #A0AEC0"
                }}
              >
                {x.joke}
              </p>
              <button
                onClick={() => removeFav(x)}
                css={{
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  color: "#A0AEC0",
                  margin: 0,
                  padding: 0,
                  marginLeft: 15
                }}
              >
                <Delete />
              </button>
            </div>
          ))
        ) : (
          <p css={{ textAlign: "center" }}>
            Press the <Heart size={16} /> button to favorite.
          </p>
        )}
      </div>
    </div>
  );
};
