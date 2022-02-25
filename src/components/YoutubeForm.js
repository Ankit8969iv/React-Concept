import { Box, Button } from '@material-ui/core'
import React from 'react'
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import '../index.css'
import TextError from './TextError';

const initialValues = {
    name:"",
    email:"",
    channel:"",
    comments:"",
    address:"",
    social:{
        facebook:"",
        twitter:"",
    },
}

const onSubmit = values =>{
    console.log(values);
}

const validationSchema = Yup.object({
    name:Yup.string("Name should be string!").required("Required"),
    email:Yup.string().email("Invalid email format").required("Required"),
    channel:Yup.string("Name should be string").required("Required"),
    address:Yup.string().required("It is required"),
})
const YoutubeForm = () => {
    return (
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
        >
            <Form className='box'>
                <div>
                  <label>Name</label><br />
                    <Field  
                        id="fullWidth" 
                        label="Name" 
                        variant="standard" 
                        name='name'
                    />
                    <ErrorMessage name="name" component={TextError} />
                </div>

                <div>
                    <label>Email</label><br />
                    <Field 
                        id="fullWidth" 
                        label="Email id" 
                        variant="standard" 
                        name="email"
                    />
                    <ErrorMessage name="email">
                        {
                            (errorMessage)=>{
                                return (
                                    <div className='error'>{errorMessage}</div>
                                )
                            }
                        }
                    </ErrorMessage>
                </div>

                <div>
                    <label>Channel</label>
                    <Field 
                        id="fullWidth" 
                        label="Channel" 
                        variant="standard" 
                        name="channel"
                    />
                    <ErrorMessage name="channel" component={TextError} />
                </div>

                <div>
                    <label htmlFor="comments">Comments</label>
                    <br/>
                    <Field name="comments" as="textarea"/>

                </div>


                <div>
                    <label htmlFor="address">Address</label>
                    <br/>
                    <Field name ="address">
                        {
                            (props)=>{
                                const {field, form, meta} = props;
                                return (
                                    <div>
                                        <input type="text" id="address" {...field} />
                                        {meta.touched && meta.error ? <div className='error'>{meta.error}</div>:null }
                                    </div>
                                )
                            }
                        }
                    </Field>
                </div>

                <div>
                    <label htmlFor="facebook">Facebook</label> <br/>
                    <Field type="text" id="facebook" name="social.facebook" />
                </div>


                <div>
                    <label htmlFor="twitter">Facebook</label> <br/>
                    <Field type="text" id="twitter" name="social.twitter" />
                </div>

                <br/><br/><br/>
                <Button  id='btn' variant="contained" type="submit" color="primary">Submit</Button>
            </Form>
        </Formik>
    )
}

export default YoutubeForm