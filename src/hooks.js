import React from "react";
import localForage from "localforage";

export const FavoritesContext = React.createContext([]);

export function FavoritesProvider(props) {
  const [favs, setFavs] = React.useState({});
  React.useEffect(() => {
    localForage.getItem("favorites").then(data => {
      if (data) {
        setFavs(data);
      }
    });
  }, []);
  const addFav = async newFav => {
    var newFavs = { ...favs, [newFav.id]: newFav };
    await localForage.setItem("favorites", newFavs);
    setFavs(current => ({ ...current, [newFav.id]: newFav }));
  };

  const removeFav = async toRemove => {
    var newFavs = { ...favs };
    delete newFavs[toRemove.id];
    await localForage.setItem("favorites", newFavs);
    setFavs(newFavs);
  };
  return (
    <FavoritesContext.Provider
      value={{
        favs,
        addFav,
        removeFav
      }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
}
