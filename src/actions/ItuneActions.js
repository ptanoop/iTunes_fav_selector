export const searchAction = (text) => {
  return {
    type: 'SEARCH_MUSIC',
    payload: {
      request: {
        method: 'get', // or get
        url:'https://itunes.apple.com/search?term='+text,
      }
    }
  }
};

export const addToFavourites = (id) => {
  return {
    type: 'ADD_FROM_FAV_LIST',
    favouriteIune: id
  }
};

export const removeFromFavourites = (id) => {
  return {
    type: 'REMOVE_FROM_FAV_LIST',
    favouriteIune: id
  }
};
