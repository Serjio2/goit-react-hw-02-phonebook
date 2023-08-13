import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import { StyledForm } from './ContactForm.styled';
import { Component } from 'react';
import { nanoid } from 'nanoid';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.number().required('Required'),
});

const initialValues = {
  id: nanoid(),
  name: '',
  number: '',
};

export class ContactForm extends Component {

  // handleChange = (event) => {
  //   console.log(event.target.name)
  //   // const { name, value } = event.currentTarget;
  //   this.setState({ 
  //     [event.currentTarget.name]: event.currentTarget.value,
  //   });
  // };

  handleSubmitForm = (value, actions) => {
    this.props.addContact(value);
    actions.resetForm();
    console.log(value);
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={this.handleSubmitForm}
      >
        <Form>
          <label>
            Name
            <Field
              type="text"
              name="name"
              placeholder="Input name"
              // value={initialValues.name}
              // onChange={this.handleChange}
            />
            <ErrorMessage name="name" />
          </label>

          <label>
            Number
            <Field
              type="tel"
              name="number"
              placeholder="Input number"
              // value={this.initialValues.number}
              // onChange={this.handleChange}
            />
            <ErrorMessage name="number" />
          </label>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  }
}
