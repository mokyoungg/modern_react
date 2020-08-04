import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  //비동기 대기 구문이 더 쓰기 쉽다.(2번)
  // 기존 코드 async onSearchSubmit(term)

  // 화살표 함수와 async 활용
  onSearchSubmit = async (term) => {
    //axios 코드 리팩터링
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
      /*기존 코드 (api 폴더, unsplash.js 참고)
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term }, 
      headers: {
        Authorization: "Client-ID eZ5vvtbknlFwjw0WT8QCwTHse9f_d0ppyX5Cc2zTarA",
      },*/
    });
    /*비동기 요청을 받는 방법(1번)
      .then((response) => {
        console.log(response.data.results);
      });*/
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
