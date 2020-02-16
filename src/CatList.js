import React, {Component } from 'react'

class CatList extends Component {
    
    catPic = () => {
        return  this.props.catPics.map(cat => {return <img id={cat.id} key={cat.id} src={cat.url} alt={`Cat - ${cat.id}`}></img> })
    }

    render(){
        return (
            <div>
                {this.catPic()}
            </div>
        )
    }
}

export default CatList