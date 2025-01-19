import { Field, Form, Formik } from 'formik';
import { VscAdd } from 'react-icons/vsc';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import css from './ContactForm.module.css';

const initialValues = { name: '', number: '' };

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ ...values }));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label>
          <Field
            name="name"
            type="text"
            className={css.input}
            placeholder="Contact name"
          />
        </label>
        <label>
          <Field
            name="number"
            type="text"
            className={css.input}
            placeholder="Telephone number"
          />
        </label>
        <button type="submit" className={css.btn}>
          <VscAdd className={css.icon} />
          Add
        </button>
      </Form>
    </Formik>
  );
}
