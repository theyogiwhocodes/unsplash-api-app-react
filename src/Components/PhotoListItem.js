import React from 'react';
import "./PhotoList.css"

class PhotoListItem extends React.Component {
  render() {
    let props = this.props;
    return (
      <div className="photo-item">
        <img src={props.url} alt={props.alt}></img>
      </div>
    )
  }
}

export default PhotoListItem;