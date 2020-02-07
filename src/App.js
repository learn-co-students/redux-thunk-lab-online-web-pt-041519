import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {   

  componentDidMount() {
    this.props.fetchCats()
  }

  // renderCatPics = () =>{
  //   )
  // }
  
  render() {
    return (
      <div className="App">
        <h1>CatBook</h1>
        <ul>
        {this.props.catPics.map((pic) => <CatList catPics={pic.url} key={pic.id} />)}
        </ul>
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

