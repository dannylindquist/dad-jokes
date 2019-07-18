// @jsx jsx
import { jsx } from "@emotion/core";
import React from "react";
import Heart from "react-feather/dist/icons/heart";
import { useFetch } from "react-async";
import { FavoritesContext } from "./hooks";

const styles = {
  container: {
    fontSize: 16,
    fontFamily: "monospace",
    color: "white",
    display: "flex",
    flexDirection: "column",
    maxWidth: 450,
    margin: "0 auto"
  },
  title: {
    alignSelf: "center",
    padding: "10px 15px",
    borderRadius: 4,
    color: "#1A202C",
    background: "#A0AEC0",
    textTransform: "uppercase"
  },
  card: {
    margin: "0 auto",
    marginTop: 20,
    background: "#2D3748",
    padding: "25px 30px",
    borderRadius: 6,
    display: "flex",
    flexDirection: "column"
  },
  iconButton: {
    border: "none",
    background: "none",
    cursor: "pointer",
    color: "#A0AEC0",
    margin: 0,
    padding: 0
  }
};

export default props => {
  const { favs, addFav, removeFav } = React.useContext(FavoritesContext);
  const { data, error, isLoading, reload } = useFetch(
    "https://icanhazdadjoke.com",
    {
      headers: {
        Accept: "application/json"
      }
    }
  );
  const isFav = data ? (favs[data.id] ? true : false) : false;
  const toggleFavStatus = joke => {
    if (isFav) {
      removeFav(joke);
    } else {
      addFav(joke);
    }
  };
  return (
    <>
      <div css={styles.container}>
        <h1 css={styles.title}>
          Dad
          <br />
          Jokes
        </h1>
        <div css={styles.card}>
          {isLoading ? (
            <p css={{ fontSize: 24 }}>...loading...</p>
          ) : (
            <p css={{ fontSize: 24 }}>{data.joke}</p>
          )}
          <div
            css={{
              display: "flex",
              alignItems: "center",
              borderTop: "2px dashed #A0AEC0",
              paddingTop: 25
            }}
          >
            <div css={{ flex: 1 }} />
            <button
              css={{
                background: "#B2F5EA",
                padding: "10px 15px",
                border: "none",
                borderRadius: 2,
                width: 100,
                fontWeight: 600,
                margin: "0 auto"
              }}
              disabled={isLoading}
              onClick={reload}
            >
              New Joke
            </button>
            <div css={{ flex: 1 }}>
              <button
                css={{
                  ...styles.iconButton,
                  justifySelf: "flex-end",
                  float: "right"
                }}
                onClick={() => toggleFavStatus(data)}
              >
                <Heart
                  size={24}
                  css={{
                    stroke: isFav && "#FEB2B2",
                    fill: isFav && "#FEB2B2",
                    ":hover": {
                      stroke: "#FEB2B2"
                    }
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
