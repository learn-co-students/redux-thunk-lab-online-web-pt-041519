import React, { Component } from 'react'

class CatList extends Component {

    render() {
        return this.props.catPics.map( pic => { return <img src={pic.url} key={pic.id} /> })
    }

}

export default CatList;