// write your CatList component here

import React, { Component } from 'react'


class CatList extends Component {

    render() {
        console.log(this.props.catPics)
        return (
            <div>
            {this.props.catPics.map(c => <img src={c.url} height="200" width="200" alt="cat pic"/> )}
            </div>
        )
    }

}

export default CatList