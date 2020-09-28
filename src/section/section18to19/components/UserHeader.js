import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  /* 다음의 코드는 서버 요청이 너무 많다.(중복요청이 많다.),
  lodash 라이브러리 사용
  componentDidMount() {
    //this.props.fetchUser(this.props.userId);
  }*/

  render() {
    //const user = this.props.users.find((user) => user.id === this.props.userId);
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

/*
const mapStateToProps = (state) => {
  return { users: state.users };
};*/

export default connect(mapStateToProps, { fetchUser })(UserHeader);
