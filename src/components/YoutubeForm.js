import { Box, Button } from '@material-ui/core'
import React from 'react'
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import '../index.css'

const initialValues = {
    name:"",
    email:"",
    channel:"",
}

const onSubmit = values =>{
    console.log(values);
}

const validationSchema = Yup.object({
    name:Yup.string("Name should be string!").required("Required"),
    email:Yup.string().email("Invalid email format").required("Required"),
    channel:Yup.string("Name should be string").required("Required"),
})
const YoutubeForm = () => {
    return (
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                
        >
            <Form className='box'>
                <label>Name</label><br />
                <Field  
                    type="text"
                    id="fullWidth" 
                    label="Name" 
                    variant="standard" 
                    name='name'
                />
                <ErrorMessage name="name" />
                <br/>
                <label>Email</label><br />
                <Field 
                    id="fullWidth" 
                    label="Email id" 
                    variant="standard" 
                    name="email"
                />
                <ErrorMessage name="email" />
                <br/>
                <label>Channel</label><br />

                <Field 
                    id="fullWidth" 
                    label="Channel" 
                    variant="standard" 
                    name="channel"
                />
                <ErrorMessage name="channel" />
                <br/><br/><br/>
                <Button  id='btn' variant="contained" type="submit" color="primary">Submit</Button>
            </Form>
        </Formik>
    )
}

export default YoutubeForm