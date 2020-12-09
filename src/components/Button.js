import React from "react";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class Button extends React.Component {
  renderSubmit(language) {
    return language === "english" ? "Submit" : "Voorleggen";
  }

  //리팩토링을 위한 함수
  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    //context의 내용을 받는 방식2 Consumer
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
        {/*
        {(color) => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {(value) => this.renderSubmit(value)}
            </LanguageContext.Consumer>
          </button>
        )}
        */}
      </ColorContext.Consumer>
    );
  }
}

/*context의 내용을 받는 방식1(객체)
 static contextType = LanguageContext;
    //console.log(this.context);
    const text = this.context === "english" ? "Submit" : "Voorleggen";
    return <button className="ui button primary">{text}</button>;
  */

//Button.contextType = LanguageContext

export default Button;
