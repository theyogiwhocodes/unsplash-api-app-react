import React from 'react';
import PhotoListItem from './PhotoListItem';
import UUID from 'uuid' // Unique user id
import "./PhotoList.css"

class PhotoList extends React.Component {
  render() {
    let props = this.props;
    console.log(props);
    const photoItems = props.photos && props.photos.map((pic) => {
      return (
        <PhotoListItem
          key={UUID()}
          url={pic.urls.thumb}
          alt={pic.alt_description}
        ></PhotoListItem>
      )
    }) // Iterating over the photos one by one
    return (
      <div className="photo-list">
        {photoItems}
      </div>
    )
  }
}
export default PhotoList;