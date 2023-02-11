import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { useFormik } from 'formik';
import { useState } from 'react';
import BookingList from './BookingList'


const initialValues = {
    date: '',
    time:'17:00',
    numberOfDiners:'1',
    occasion:'Birthday',
    name:'',
    email: '',
    comments:'',
    policy: false,
  };
  
  const validationSchema = Yup.object().shape({
    date: Yup.date().required('Date is required'),
    time: Yup.string().matches(
      /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/,
      'Invalid time format (HH:mm)'
    ).required('Time is required'),
    numberOfDiners: Yup.number().required('Number of diners is required').min(1) ,
    occasion: Yup.string().required('Occasion is required'),
    name: Yup.string().required('Name is required'),
    email: Yup.string().email().required('Email is required'),
    comments: Yup.string().min(5, 'Field must have at least 5 characters'),
    policy: Yup.boolean().required('Please agree with the cancelling policy')

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
        }, 1000);
      },
    });
    return { formik, submissionMessage };
};
  const BookingForm =
  ({ selectedDate, availableTimes, setSelectedDate, dispatch })=>{
    
    const { formik } = useForm();
    return(
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={formik.handleSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.policy) {
            errors.acceptTerms = "Policy is required";
          }
          return errors;
        }}
        type="date"
        value={selectedDate.toISOString().substring(0, 10)}
        onChange={e => setSelectedDate(new Date(e.target.value))}
      >
        
        {({ errors, touched,isValid,dirty }) => (
          <Form onSubmit={formik.handleSubmit}style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
            <label htmlFor="res-date" style={{color:'#edefee',marginLeft:'-120px',marginBottom:'-10px',fontWeight:'bold'}}>DATE*:</label>
            <Field name="date" type="date" id="res-date" style={{borderRadius:'5px',padding:'5px',
            fontSize:'15px',height:'50px',width:'500px',marginBottom:'5px',border:'none',cursor:'pointer',marginLeft:'-120px'}} 
            {...formik.getFieldProps('date')} />
            {formik.errors.date && formik.touched.date ? (
              <div style={{color:'red',fontWeight:'bold'}}>{formik.errors.date}</div>
            ) : null}
  
            <label htmlFor="res-time" style={{color:'#edefee',marginLeft:'-120px',marginBottom:'-10px',fontWeight:'bold'}}>TIME*:</label>
            <Field name="time" as="select" id="res-time"style={{borderRadius:'5px',padding:'5px',
            fontSize:'15px',height:'50px',width:'510px',marginBottom:'20px',border:'none',cursor:'pointer',marginLeft:'-120px'}}
            {...formik.getFieldProps('time')}>
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
            </Field>
            {formik.errors.time && formik.touched.time ? (
              <div style={{color:'red',fontWeight:'bold'}}>{formik.errors.time}</div>
            ) : null}
  
            <label htmlFor="guests" style={{color:'#edefee',marginLeft:'-120px',marginBottom:'-10px',fontWeight:'bold'}}>NUMBER OF DINERS*:</label>
            <Field name="guests" type="number" placeholder="1" min="1" max="10" id="guests" style={{borderRadius:'5px',padding:'5px',
            fontSize:'15px',height:'50px',width:'500px',marginBottom:'20px',border:'none',cursor:'pointer',marginLeft:'-120px'}}
            {...formik.getFieldProps('numberOfDiners')}/>
            {formik.guests && formik.touched.guests ? (
              <div style={{color:'red',fontWeight:'bold'}}>{formik.errors.guests}</div>
            ) : null}
  
            <label htmlFor="occasion"style={{color:'#edefee',marginLeft:'-120px',marginBottom:'-10px',fontWeight:'bold'}}>OCCASION*:</label>
            <Field name="occasion" as="select" id="occasion" style={{borderRadius:'5px',padding:'5px',
            fontSize:'15px',height:'50px',width:'510px',marginBottom:'20px',border:'none',cursor:'pointer',marginLeft:'-120px'}}
            {...formik.getFieldProps('occasion')}>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Dinner</option>
            </Field>
            {formik.errors.occasion && formik.touched.occasion ? (
              <div style={{color:'red',fontWeight:'bold'}}>{formik.occasion}</div>
            ) : null}
            <label htmlFor='name'style={{color:'#edefee',marginLeft:'-120px',marginBottom:'-10px',fontWeight:'bold'}}>NAME*:</label>
            <Field name="name" type="string" id="name" style={{borderRadius:'5px',padding:'5px',
            fontSize:'15px',height:'50px',width:'500px',marginBottom:'20px',border:'none',cursor:'pointer',marginLeft:'-120px'}}
            {...formik.getFieldProps('name')}/>
            {formik.errors.name && formik.touched.name ? (
              <div style={{color:'red',fontWeight:'bold'}}>{formik.errors.name}</div>
            ) : null}
            <label htmlFor='email'style={{color:'#edefee',marginLeft:'-120px',marginBottom:'-10px',fontWeight:'bold'}}>EMAIL*:</label>
            <Field name='email' type='email' id='email' style={{borderRadius:'5px',padding:'5px',
            fontSize:'15px',height:'50px',width:'500px',marginBottom:'20px',border:'none',cursor:'pointer',marginLeft:'-120px'}}
            {...formik.getFieldProps('email')}/>
            {formik.errors.email && formik.touched.email ? (
              <div style={{color:'red',fontWeight:'bold'}}>{formik.errors.email}</div>
            ) : null}
            <label htmlFor="comments"style={{color:'#edefee',marginLeft:'-120px',marginBottom:'-10px',fontWeight:'bold'}}>COMMENT:</label>
          <Field name="comments" as="textarea" id="comments" style={{borderRadius:'5px',
          fontSize:'15px',width:'500px',padding:'5px',marginBottom:'20px',border:'none',cursor:'pointer',marginLeft:'-120px',height:'250px'}} 
          {...formik.getFieldProps('comments')}/>
          {formik.errors.comments && formik.touched.comments ? (
            <div style={{color:'red',fontWeight:'bold'}}>{formik.errors.comments}</div>
          ) : null}
            <label htmlFor="policy" style={{marginLeft:'-120px',marginTop:'10px',marginBottom:'-10px',color:'#edefee'}}>
  <Field
    type="checkbox"required
    name="policy"
    id="policy"
    onChange={formik.handleChange}
    checked={formik.values.policy}
  />
  I agree with the cancelling policy of the restaurant
</label>
{formik.errors.policy && formik.touched.policy ? (
  <div style={{color:'red',fontWeight:'bold'}}>formik.errors.policy</div>
) : null}
           
            <button type="submit" disabled={formik.isSubmitting || !formik.isValid || !formik.dirty||!formik.values.policy} style={{backgroundColor:formik.isSubmitting || !formik.isValid || !formik.dirty ||!formik.values.policy ?'grey':'var(--color-yellow)',fontWeight:'bold',borderRadius:'5px',
            color:formik.isSubmitting || !formik.isValid || !formik.dirty ||!formik.values.policy ? '#edefee':'#333333',opacity: formik.isSubmitting || !formik.isValid || !formik.dirty ? 0.5 : 1,padding:'2opx',fontSize:'15px',width:'510px',border:'none',
            cursor:'pointer',marginLeft:'-120px',marginBottom:'20px',height:'50px'}}
            >Make Your reservation</button>
           <BookingList slots={availableTimes.availableTimes} />
          </Form>

        )}
      </Formik>
        );
  }
  export default BookingForm;