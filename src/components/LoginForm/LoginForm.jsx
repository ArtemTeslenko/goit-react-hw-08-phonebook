import { Formik, Form, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/authOperations';
import * as yup from 'yup';
import { Input } from './LoginForm.styled';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, actions) => {
      dispatch(login(values));
      actions.resetForm();
    },
  });

  return (
    <Formik validationSchema={schema}>
      <Form onSubmit={formik.handleSubmit}>
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
