import { Field, Formik, ErrorMessage  } from 'formik';
import * as Yup from 'yup';
import { StyledForm } from './Phonebook.styled';
import { nanoid } from 'nanoid'

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required!'),
});

export const Phonebook = ({addContact}) => {
  return (
    <Formik
      initialValues={{
        name: '',
      }}

      validationSchema={schema}

      onSubmit={(values, actions) => {
        addContact({...values, id: nanoid()});
        actions.resetForm();
      }}
    >
      <StyledForm>
        <label>
          Name
          <Field name="name" placeholder="Input name" />
          <ErrorMessage name="name"/>
        </label>

        {/* <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" placeholder="Doe" /> */}

        {/* <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            /> */}
        <button type="submit">Add contact</button>
      </StyledForm>
    </Formik>
  );
};
