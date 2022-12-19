import { Formik, Form, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/authOperations';
import * as yup from 'yup';
import { Input } from './RegisterForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values, actions) => {
      dispatch(register(values));
      actions.resetForm();
    },
  });

  return (
    <Formik validationSchema={schema}>
      <Form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <Input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="pass">Password</label>
        <Input
          type="password"
          id="pass"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};