import React, { Component } from 'react'

class CatList extends Component {


    render(){
        console.log(this.props)
        return (
            <li key={this.props.key}>
                <img src={this.props.catPics} alt=''></img>
            </li>
        )
    }
}

export default CatList