// write your CatList component here
import React from 'react'

const CatList = (props) => {
    console.log(props)
    // display cat pic with image url
    const images = props.catPics.map(catPic => 
        <div key={catPic.id}> 
            <img src={catPic.url} alt={catPic.id} />
        </div>)

    return (
        <div>
            {images}
        </div>
    )
}

export default CatList;