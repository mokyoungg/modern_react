// 이 파일의 목적은 컨텍스트 객체를 생성하고 내보내는 것.
import React from "react";

//대문자 사용(일단 태그가 아닌 컴포넌트로 인식)
const Context = React.createContext("english");

// 비즈니스 logic
export class LanguageStore extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;

//export default React.createContext("english"); //default value

/*
const context = React.createContext("english");

console.log(context);

export default context;
*/
