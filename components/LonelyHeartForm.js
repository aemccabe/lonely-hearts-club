import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { customInput } from "./fields";
import { validate } from "../validation";
import "./LonelyHeartForm.css";

class LonelyHeartForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form id="question-section" onSubmit={handleSubmit}>
        <Field name="name" component={customInput} type="text" label="Name:" />

        <Field
          name="likes"
          component={customInput}
          type="text"
          label="Likes:"
        />

        <Field
          name="dislikes"
          component={customInput}
          type="text"
          label="Dislikes:"
        />

        <Field
          name="dreamdate"
          component={customInput}
          type="text"
          label="Dream Date:"
        />

        <button type="submit">Next</button>
        <style global jsx>{`
          #question-section {
            display: grid;
          }
        `}</style>
      </form>
    );
  }
}

LonelyHeartForm = reduxForm({
  form: "register",
  validate
})(LonelyHeartForm);

export default LonelyHeartForm;
