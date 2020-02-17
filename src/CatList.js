import React, { Component } from 'react';

class CatList extends Component {

  render() {
    // console.log(this.props)
    let cats = this.props.catPics.map((cat, index) => 
        <li key={index}>
            <img src={cat.url} alt='' />
        </li>
    );

    return (
      <div>
        <ul>
          {cats}
        </ul>
      </div>
    );
  }
};

export default CatList