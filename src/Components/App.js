import React from 'react';
import './App.css';
import SerachBar from './SearchBar';
import PhotoList from './PhotoList';
const API_KEY = "mwVtj_VwBxjTZbLgbUxRBK3kYcqZIpBVRuutaJ8HH5w"

// https://api.unsplash.com/search/photos?query=coding&client_id=mwVtj_VwBxjTZbLgbUxRBK3kYcqZIpBVRuutaJ8HH5w


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photosList: [],
      searchTerm: "",
      noResultFlag: false
    }
    this.changeSearchTermValue = this.changeSearchTermValue.bind(this);
  }
  componentDidMount() {
    if (this.state.searchTerm !== "") {
      console.log("Component Mounted inside if", this.state.searchTerm) // Displaying the searchTerm in the console when component gets mounted. 
      this.fetchPhotos(this.state.searchTerm) // Send the searchTerm to the Unsplash API via a function.
    }
    else {
      console.log("Component Mounted inside else", this.state.searchTerm) // Displaying the default searchTerm in the console when component gets mounted. 
      this.fetchPhotos("coding") // Send the default searchTerm to the Unsplash API via a function.
    }
  }
  fetchPhotos = (term) => {
    fetch(`https://api.unsplash.com/search/photos?query=${term}&client_id=${API_KEY}`)
      .then(response => { return response.json() })
      .then(data => {
        console.log("data is", data);
        if (data.results) {
          this.setState({
            noResultFlag: false,
            photosList: data.results
          })
        }
        else {
          this.setState({
            noResultFlag: true,
            photosList: data.results
          })
        }
      })
  }
  changeSearchTermValue = (event) => {
    this.setState({
      searchTerm: event.target.value
    },
      () => { this.state.searchTerm === "" ? this.fetchPhotos("coding") : this.fetchPhotos(this.state.searchTerm) } // Fetch photos values dynamically on every keyboard input
    )
  }
  render() {
    return (
      <div className="App">
        <SerachBar changeSearchTermValue={this.changeSearchTermValue} value={this.state.searchTerm}></SerachBar>
        <PhotoList photos={this.state.photosList}></PhotoList>
      </div>
    );
  }
}

export default App;
