import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  render() {
    let props = this.props; // Saving the props from parent in local variable props
    console.log(props)
    return (
      <div>
        <input
          autoFocus
          className="search-input"
          onKeyUp={props.changeSearchTermValue}
          type="text"
          placeholder="Search photos from Unsplash"
          value={props.searchTerm}
        >
        </input>
      </div>
    )
  }
}

export default SearchBar;