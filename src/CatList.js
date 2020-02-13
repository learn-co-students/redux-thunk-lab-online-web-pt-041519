// write your CatList component here
import React, { Component } from 'react'

export default class CatList extends Component {
 
    allCats = () => this.props.catPics.map(pic => 
            <img
            key={pic.id}
            src={pic.url}
            />
            )
    render() {   
        return (
            <div>
                {this.allCats()}
                </div>
        )
    }
}
// pic.url
// pic.id