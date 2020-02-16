import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList'


class App extends Component { 
  
  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }
  
  render() {
    const {catPics, loading} = this.props
    return (
      <div>
        <h1>CatBook</h1>
        {console.log(catPics)}
        <CatList catPics={catPics} loading={loading}/>
      </div>
    );
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

