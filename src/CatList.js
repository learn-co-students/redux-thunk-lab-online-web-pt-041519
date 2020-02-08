// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {
	render() {
		return (
			<div>
				{this.props.catPics.map((catPic, index) => <div key={index}><img src={catPic.url} alt="cat" /></div>)}
			</div>
		)
	}
}

export default CatList