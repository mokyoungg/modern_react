import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

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

  // render 부분 리팩터링(render시, 붉은색 테두리가 있길 원할 때
  // 모든 조건문에 <div>를 만들고 같은 className을 줄 필요가 없다.)
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  //React says we have to define render!!
  render() {
    // 리팩터링(render)
    return <div className="border red">{this.renderContent()}</div>;
    /*처음 코드
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;*/
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
