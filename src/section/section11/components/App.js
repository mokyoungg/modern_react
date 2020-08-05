import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

const KEY = `AIzaSyA39oc6sa7xMOabjl3GIoVQj2Uj-Vf81dY`;

class App extends React.Component {
  onTermSubmit = (term) => {
    youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
      },
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
