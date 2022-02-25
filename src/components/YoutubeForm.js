import { Box, Button, Divider, TextField } from '@material-ui/core'
import React from 'react'
import * as Yup from 'yup';
import { Field, useFormik } from 'formik'
import '../index.css'

const initialValues = {
    name:"",
    email:"",
    channel:"",
}

const onSubmit = values =>{
    console.log(values);
}

const handleValidate = (values)=>{
    let errors = {};
    if (!values.name){
        errors.name="Enter you name";
    }
    if (!values.email){
        errors.email="Enter you valid email";
    }
    if (!values.channel){
        errors.channel = 'Required';
    }
    return errors;
}

const validationSchema = Yup.object({
    name:Yup.string("Name should be string!").required("Required"),
    email:Yup.string().email("Invalid email format").required("Required"),
    channel:Yup.string("Name should be string").required("Required"),
})
const YoutubeForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate:handleValidate,
        validationSchema,
    });
    // console.log(formik.touched)
    console.log(formik.errors);

    return (
        <Box className='box'>
            <form onSubmit={formik.onSubmit}>
                <label>Name</label><br />
                <input  
                    type="text"
                    id="fullWidth" 
                    label="Name" 
                    variant="standard" 
                    name='name'  
                    {...formik.getFieldProps("name")}
                />
                {formik.errors.email   && formik.touched.name ? <p>{formik.errors.name}</p> :null } 
                <br/>
                <label>Email</label><br />
                <input 
                    id="fullWidth" 
                    label="Email id" 
                    variant="standard" 
                    name="email" 
                    {...formik.getFieldProps("email")}
                />

                {formik.errors.email && formik.touched.email ? <p>{formik.errors.email}</p> :null }
                <br/>
                <label>Channel</label><br />

                <input 
                    id="fullWidth" 
                    label="Channel" 
                    variant="standard" 
                    name="channel" 
                    {...formik.getFieldProps("channel")}
                />
                {formik.errors.email && formik.touched.channel ? <p>{formik.errors.channel}</p> :null }
                
                <br/><br/><br/>
                <Button  id='btn' variant="contained" type="submit" color="primary">Submit</Button>
            </form>
        </Box>
    )
}

export default YoutubeForm