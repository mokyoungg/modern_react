import React from "react";
import ReactDom from "react-dom";

/*
const App = () => {
  //현재 위치 찾는 함수
  window.navigator.geolocation.getCurrentPosition(
    (postion) => console.log(postion),
    (err) => console.log(err)
  );

  return <div>위도: </div>;
};
*/

//클래스형 컴포넌트로 리팩토링
class App extends React.Component {
  /* constructor을 활용한 state 값 초기화
  constructor(props) {
    super(props);
    // This is the only time we do direct assignment to this.state
    this.state = { lat: null, errorMessage: "" }; //lat = 위도
  }*/

  // state 값 리팩토링(약어)
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      //리팩토링
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })

      /*초기 코드
      (postion) => {
        // we called setState!!
        this.setState({ lat: postion.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }*/
    );
  }

  //React says we have to define render!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>위도: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
