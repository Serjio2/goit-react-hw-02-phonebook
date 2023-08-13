import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { StyledForm, StyledInput } from './ContactForm.styled';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.number().required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  handleSubmitForm = (value, actions) => {
    this.props.addContact({ ...value, id: nanoid() });
    actions.resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={this.handleSubmitForm}
      >
        <StyledForm>
          <label>
            <p>Name:</p>
            <StyledInput type="text" name="name" placeholder="Input name" />
            <ErrorMessage name="name" component="span"/>
          </label>

          <label>
            <p>Number:</p>
            <StyledInput type="tel" name="number" placeholder="Input number" />
            <ErrorMessage name="number" component="span"/>
          </label>

          <button type="submit">Add contact</button>
        </StyledForm>
      </Formik>
    );
  }
}
