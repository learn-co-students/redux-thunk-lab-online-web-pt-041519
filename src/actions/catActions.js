// write and export your action creator function here

// 1. we export fetchCats as a function 
// 2. we send a dispatch of loading cats to our reducer, indiciating that we will fetch 
// 3. then we fetch from the api
// 4. then we send another dispatch to the reducer once we've received that data from the api

export const fetchCats = () => {
   return (dispatch) => {
     dispatch({ type: 'LOADING_CATS'})
     fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(resp => {
       return resp.json()
     }).then(respJSON => {
       dispatch({ type: 'ADD_CATS', cats: respJSON.images })
     })
   }
}