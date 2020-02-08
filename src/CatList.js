import React, { Component } from 'react'

class CatList extends Component {
    render() {
        if (!this.props.catPics) {
            return null;
        }

        const allCats = this.props.catPics.map(pic => <img src={pic.url}/>)
        
        return(
            <div>
                {allCats}
            </div>
        )
    }
}

export default CatList;