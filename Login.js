import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Login.css'
import { useState } from "react";


const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
      message: 'Password needs to have a lowercase letter an uppercase letter,and a number',
      excludeEmptyString: true,
    })
    .required(),
});

const useForm = () => {
  const [submissionMessage, setSubmissionMessage] = useState('');
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      // simulate sending data to a server
      setTimeout(() => {
        setSubmitting(false);
        setSubmissionMessage('Data submitted successfully!');
        resetForm();
        window.location.href = "/#home";
      }, 1000);
    },
  });

  return { formik, submissionMessage };
};
  const Login= () =>{
    const { formik } = useForm();
    return(
<div className="app__login" id="login">
    <h1 className="app__login_h1">LOGIN</h1>
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label style={{marginLeft:'-20px'}} htmlFor="email">Email*:</label>
        <input
          id="email"
          type="email"
          {...formik.getFieldProps('email')}
        />
        {formik.errors.email && formik.touched.email ? (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        ) : null}
      </div>
      <div className=".app__login-form-container">
        <label htmlFor="password">Password*:</label>
        <input
          id="password"
          type="password"
          {...formik.getFieldProps('password')}
        />
        {formik.errors.password && formik.touched.password ? (
          <div style={{ color: 'red' }}>{formik.errors.password}</div>
        ) : null}
        <br/><a className="app__login-forget-password" href="#password">Forgot password?</a>
      </div>
      <button  style={{ color:formik.isSubmitting || !formik.isValid || !formik.dirty ? 'black':'#EDEFEE',opacity: formik.isSubmitting || !formik.isValid || !formik.dirty ? 0.5 : 1  }}
      type="submit" disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}>
        Submit
      </button>
      <h2 className="app__login-h2">OR</h2>
      <p className="app__login-new">New to Little Lemon?<a href="#account"> Create a new account</a></p>
    </form>
</div>

    );
  }
  export default Login;