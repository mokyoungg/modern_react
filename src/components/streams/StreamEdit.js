import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    //console.log(formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    //console.log(this.props);
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

// state는 redux store의 모든 state
// ownProps는 컴포넌트 내부에 표시되는 props 객체
const mapStateToProps = (state, ownProps) => {
  //console.log(ownProps);
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);

/* -.pick() 코드 예제
const profile = {
  name: "Sam",
  age: 18,
  favoriteColor: "green",
};

_.pick(profile, "name"); // {"name": "Sam"}*/

// StreamCreate와 StreamEdit 컴포넌트과 매우 비슷하여
// StreamForm 컴포넌트를 제작, 리팩토링 하였다.
// 아래는 기존의 StreamEdit 코드
/*
class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    //console.log(this.props);
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return <div>{this.props.stream.title}</div>;
  }
}

// state는 redux store의 모든 state
// ownProps는 컴포넌트 내부에 표시되는 props 객체
const mapStateToProps = (state, ownProps) => {
  //console.log(ownProps);
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
*/
