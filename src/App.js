import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'
import CatList from './CatList'
 
class App extends Component {
 
  // Launch fetchCats when component mounted
  componentDidMount() {
    // Show initial array (should be empty)
    // console.log(this.props)
    this.props.fetchCats()
  }

  // Display cats
  render() {
    // Investigate when loading occurs
    // console.log(this.props.loading)

    return ( 
      <div className="App">
        <h1>CatBook</h1>
        <CatList catPics={this.props.catPics} loading={this.props.loading} />
      </div>
    );
  }
}
 
// Make catPics and loading available
const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}
 
// Make fetchCats() available on mount
const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)