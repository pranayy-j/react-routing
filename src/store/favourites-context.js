import { createContext,useState } from "react";

const FavouritesContext = createContext({
    favourites: [],
    totalFavourites: 0,

  addFavoruite: (favouriteMeetup) => {},
  removeFavourite: (meetupId) => {},
  itemIsFavourite: (meetupId) => {}
});

export function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);

  function addFavouriteHandler(favouriteMeetup) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.concat(favouriteMeetup);
    });
  }

  function removeFavouriteHandler(meetupId) {
    setUserFavourites(prevUserFavourites => {
      return prevUserFavourites.filter(meetup => meetup.id !== meetupId);
    });
  }

  function itemIsFavouriteHandler(meetupId) {
    return userFavourites.some(meetup => meetup.id === meetupId);
  }

  const context = {
    favourites: userFavourites,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler,
    totalFavourites: userFavourites.length

  };

  return (
    
    <FavouritesContext.Provider value={context}>
      {props.children}
      </FavouritesContext.Provider>

);
}

export default FavouritesContext;