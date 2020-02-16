import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'

class App extends Component {   

  componentDidMount() {
    this.props.fetchCats()
  }
  
  render() {
    console.log(this.props.catPics)
    return (
      <div className="App"> 
        <h1>CatBook</h1> 
      </div>
    );
  }
}


// write out the mapStateToProps function
// Any key/value pairs returned by mapStateToProps() will become props in the App component.
const mapStateToProps = (state) => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)

