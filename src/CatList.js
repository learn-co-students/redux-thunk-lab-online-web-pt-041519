import React from 'react';

const CatList = props => {

  // Style cat images inline with padding
  const imgStyle = {
    height: '100px',
    width: '100px',
    padding: '0.5em'
  };
  const divStyle = {
    display: 'inline',
  }

  // Display each cat pic with an image URL
  const imgs = props.catPics.map(cat => <div key={cat.id} style={divStyle}><img style={imgStyle} src={cat.url} alt={`Cat ${cat.id}`} /></div>)

  // If this.props.loading, show spinner. Else show CatList
  const showContent = () => {
    return props.loading ? <div className="loader"></div> : imgs
  }

  return (
    <div>
      {showContent()}
    </div>
  );
};

export default CatList;