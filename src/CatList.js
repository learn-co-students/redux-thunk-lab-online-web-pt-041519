import React, {Component } from 'react'

class CatList extends Component {
    

    render(){
        console.log(this.props)
        const catPic = this.props.catPics.map(cat => {return <img id={cat.id} key={cat.id} src={cat.url} alt={`Cat - ${cat.id}`}></img> })
        if (this.props.loading === false) {
            return (
                catPic
            )
        }else{
            return 'loading'
        }
    }
}

export default CatList