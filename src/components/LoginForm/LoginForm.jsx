import { Formik, Form, useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { login } from 'redux/authOperations';
import { selectAuthError } from 'redux/selectors';
import * as yup from 'yup';
import { Button, Input, Label } from 'styles';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export const LoginForm = ({ setPath }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const error = useSelector(selectAuthError);

  useEffect(() => {
    setPath(pathname);
  }, [pathname, setPath]);

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
    <>
      <Formik validationSchema={schema}>
        <Form onSubmit={formik.handleSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <Label htmlFor="pass">Password</Label>
          <Input
            type="password"
            id="pass"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
      {error && <p>Something whent wrong, please try again</p>}
    </>
  );
};
