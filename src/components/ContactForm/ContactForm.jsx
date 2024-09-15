import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './ContactForm.module.css';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { useId } from 'react';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name can not be longer than 50 characters')
    .required('Name is required'),
  number: yup
    .string()
    .min(3, 'Number must be at least 3 characters')
    .max(50, 'Number can not be longer than 50 characters')
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Enter in the format 123-45-67')
    .min(9, 'Too Short!')
    .max(9, 'Too Long!')
    .required('Number is required'),
});

export default function ContactForm({ onAdd }) {
  const userNameId = useId();
  const userNumber = useId();
  const newContactId = nanoid();

  const handleSubmit = (values, actions) => {
    values.id = newContactId;
    onAdd(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <div className={css.wrap}>
          <label>Name</label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={userNameId}
          />
          <ErrorMessage name="name" component="div" className={css.errror} />
        </div>

        <div className={css.wrap}>
          <label>Number</label>
          <Field
            className={css.input}
            type="tel"
            name="number"
            id={userNumber}
          />
          <ErrorMessage name="number" component="div" className={css.errror} />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
