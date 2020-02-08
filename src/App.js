import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'
import CatList from './CatList';

class App extends Component {

	componentDidMount() {
		this.props.fetchCats()
	}
  
  render() {
  	if (this.props.loading) {
  		return (
  			<h1>Loading...</h1>
			)
  	} else {
	    return (
	      <div className="App">
	        <h1>CatBook</h1>
	        <CatList catPics={this.props.catPics} />
	      </div>
	    )
	  }
  }
}

const mapStateToProps = state => {
	return {
		catPics: state.cats,
		loading: state.loading
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchCats: () => dispatch(fetchCats())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

