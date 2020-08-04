import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  //uncontrolled element 관련
  onInputChange(event) {
    console.log(event.target.value);
  }

  /*this 문제 발생 코드
  onFormSubmit(event) {
    event.preventDefault(); //제출시, 자동으로 새로고침되는 것을 막는다.
    // console.log(this.state.term); >> TypeError: Cannot read property 'state' of undefined
  }*/

  //JS this 문제 해결(arrow function)
  onFormSubmit = (event) => {
    event.preventDefault();
    //console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Seacrh</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
