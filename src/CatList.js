// write your CatList component here
import React from 'react'

const CatList = props => {
    if (props.loading === true){
        return 'LOADING'
    }else{
    return (
        <div>
            {props.catPics.map((cat, index) => <img src={cat.url} key={index}/>)}
        </div>
    )}
}

export default CatList