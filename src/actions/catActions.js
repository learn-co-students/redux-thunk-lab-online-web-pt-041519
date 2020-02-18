// write and export your action creator function here

export const fetchCats = () => {
  try {
    return dispatch => {
      // dispatch({ type: "LOADING_CATS" })
      // const res = await fetch(
      //   "https://learn-co-curriculum.github.io/cat-api/cats.json"
      //   );
      //   const data = await res.json();
      //   await dispatch({ type: "ADD_CATS", payload: data.images });
      //   console.log(data.images)
      dispatch({ type: "LOADING_CATS" });
      fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
        .then(res => res.json())
        .then(data => dispatch({ type: "ADD_CATS", cats: data.images }));
    };
  } catch (error) {
    console.log(error.message);
  }
};
