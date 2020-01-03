import React from 'react'

const CatList = props => {

    return (
        <div>
            {props.catPics.map(cat => <img src={cat.url} width='250' height='200' />)}
        </div>
    )

}

export default CatList