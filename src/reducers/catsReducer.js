// add the catsReducer

// pass in original state as an argument to catsReducer, 
// it is a blank array with default loading status of false - meaning we haven't fetched yet

const catsReducer = (state = { cats: [], loading: false}, action) => {
   // set up a switch that handles two actions: 'LOADING_CATS' and 'ADD_CATS'
   switch(action.type) {
      case 'LOADING_CATS': 
         return {
            ...state,
            cats: [...state.cats],
            loading: true
         }
      case 'ADD_CATS':
         return {
            // return a shallow copy of the state because we can't mutate the actual state
            ...state,
            // set the cats key of the state copy to whatever we're bringing back after the fetch call
            cats: action.cats,
            // set loading to false because we have successfully fetched
            loading: false
         }
      default:
         return state
   }
}

export default catsReducer