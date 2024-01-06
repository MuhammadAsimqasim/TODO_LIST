import React, { useRef } from 'react'
import './SignUpForm.css'
import { useNavigate } from 'react-router-dom';
import { Form, Formik, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { signUpSchema } from '../../../Schema/Index';
import { login } from '../../../features/userSlice';
import { auth } from '../../../firebase';

const  initialValues = {
  name : "",
  email : "",
  Password : "",
  Confirm_Password : "",
}

function SignUpForm() {
    const navigate = useNavigate()


    
    const dispatch = useDispatch()

    const emailRef = useRef(null);
    const passwordRef = useRef(null)

  


    const { values, errors, handleBlur, handleChange, handleSubmit, touched} = useFormik({
      initialValues:initialValues,
      validationSchema:signUpSchema ,
      onsubmit : (value) => {
        // console.log(values);
        
  
      },
    });


    const register = (payload) => {
      // e.preventDefault();
  
      auth.createUserWithEmailAndPassword(
        payload?.email,
        payload?.Password,
      )
      .then((authUser) => {
        console.log(authUser)
        dispatch(login(authUser))
        navigate('/')
      })
        .catch((error) =>{
          alert(error.message);
        });
  
    };

  return   (
    <Formik
    onSubmit={handleSubmit}
    validateOnChange={true}>
  <div className='signupscreen'>


  <Form
   onSubmit={handleSubmit}
   validateOnChange={true}>
          <h1>SignUp</h1>
          <input 
          placeholder='Name'
          type="name"
          name='name'
          autoComplete="off"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
            />
            { errors.name && touched.name  ? ( <p>{errors.name}</p> ) : null} 
          <input 
          placeholder='Email '
          ref={emailRef}
          type="email"
          name='email'
          autoComplete="off"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          />
           { errors.email && touched.email  ? ( <p>{errors.email}</p> ) : null} 
          <input 
           placeholder='Password' 
           ref={passwordRef}
           type="Password" 
           name='Password'
           autoComplete="off" 
           value={values.Password}
           onChange={handleChange}
           onBlur={handleBlur}
           />
           { errors.Password && touched.Password  ? ( <p>{errors.Password}</p> ) : null} 
           <input 
           placeholder='Confirm_Password' 
           type="Password" 
           name="Confirm_Password"
           autoComplete="off"
           value={values.Confirm_Password}
           onChange={handleChange}
           onBlur={handleBlur}
           />
           { errors.Confirm_Password && touched.Confirm_Password  ? ( <p>{errors.Confirm_Password}</p> ) : null} 
          <button type='submit'  onClick={() => register(values)}>Sign up</button>
          <h4><span className='signupscreen_gray'>Now to TODO?</span>
          <span className='signupscreen_link'onClick={() => navigate("/")}>Login</span>
          </h4>
      </Form>
  
  
      </div>
      </Formik>
      )
}

export default SignUpForm
