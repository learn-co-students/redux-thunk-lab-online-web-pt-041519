// write your CatList component here

import React from "react";

const CatList = ({ catPics }) => {
  const allCats = catPics.map(catPic => {
    console.log(catPic);
    return (
      <div key={catPic.id}>
        <img src={catPic.url} alt={catPic.source_url} /> <br />
      </div>
    );
  });

  return <div>{allCats}</div>;
};

export default CatList;
