

// var getItuneData = function(searchText){
//     var result = axios({
//                     method:'get',
//                     url:'https://itunes.apple.com/search?term='+searchText,
//                     responseType:'json'
//                   })
//                     .then(function(response) {
//                       return response;
//                   });
//     console.log(result);
//     return result;
// }

const initialState = {
    searchResults: [],
    favouriteList: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SEARCH_MUSIC':
      return {
        searchResults: state.searchResults,
        favouriteList: state.favouriteList
      };
    case 'SEARCH_MUSIC_SUCCESS'  :
      console.log(action.payload.data);
      var search_results = action.payload.data.results;
      for(var i = 0; i < search_results.length; i++){
          search_results[i].isFavourite = false;
          for(var j = 0; j < state.favouriteList.length; j++){
              if(state.favouriteList[j].trackId === search_results[i].trackId){
                  search_results[i].isFavourite = true;
                  break;
              }
          }
      }
      return{
          searchResults: search_results,
          favouriteList: state.favouriteList
      }
    case 'ADD_FROM_FAV_LIST' :
        var favList = state.favouriteList;
        favList.push(action.favouriteIune);
        var sResults = [];
        for(var k = 0; k < state.searchResults.length; k++){
            var res = state.searchResults[k];
            if(res.trackId === action.favouriteIune){

                res.isFavourite = true;
                console.log(res);
            }
            sResults.push(res);
        }
        return{
            searchResults: sResults,
            favouriteList: favList
        }
    case 'REMOVE_FROM_FAV_LIST' :
        var fList = state.favouriteList;
        fList.pop(action.favouriteIune);
        var fResults = [];
        for(i = 0; i < state.searchResults.length; i++){
            res = state.searchResults[i];
            if(res.trackId === action.favouriteIune){
                res.isFavourite = false;
            }
            fResults.push(res);
        }
        return{
            searchResults: fResults,
            favouriteList: fList
        }
    default:
      return state;
  }
}
