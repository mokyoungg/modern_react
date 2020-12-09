import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    //event.preventDefault();
    this.props.createStream(formValues);
  };

  render() {
    //console.log(this.props);
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);

// StreamCreate와 StreamEdit 컴포넌트과 매우 비슷하여
// StreamForm 컴포넌트를 제작, 리팩토링 하였다.
// 아래는 기존의 StreamCreate 코드
/*class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  //코드 리팩토링
  renderInput = ({ input, label, meta }) => {
    //console.log(meta);

    const className = `filed ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  //기존 코드
   renderInput(formProps) {
    //console.log(formProps);
    return (
      <input
        onChange={formProps.input.onChange}
        value={formProps.input.value}
      />
    );
  }

  onSubmit = (formValues) => {
    //event.preventDefault();
    this.props.createStream(formValues);
  };

  render() {
    //console.log(this.props);
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

const fromWrapped = reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);

//코드 리팩토링
export default connect(null, { createStream })(fromWrapped);

// connect와 reduxForm 함께 쓰기
export default connect()(
  reduxForm({
    form: "streamCreate",
    validate,
  })(StreamCreate)
);
*/
