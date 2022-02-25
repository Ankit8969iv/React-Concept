import { Box, Button, Divider, TextField } from '@material-ui/core'
import React from 'react'
import { useFormik } from 'formik'
import '../index.css'

const handleInitial = {
    name:"",
    email:"",
    channel:"",
}

const handleSubmit = (values)=>{
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

const YoutubeForm = () => {
    const formik = useFormik({
        initialValues: handleInitial,
        onSubmit: handleSubmit , 
        validate: handleValidate
    });
    console.log(formik.touched)
    return (
        <Box className='box'>
            <form onSubmit={formik.handleSubmit}>
                <TextField fullWidth  
                    id="fullWidth" 
                    label="Name" 
                    variant="standard" 
                    name='name'  
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.name} 
                />
                <Divider />
                {formik.errors.email   && formik.touched.name ? <span>*{formik.errors.name}</span> :null }

                <TextField fullWidth 
                    id="fullWidth" 
                    label="Email id" 
                    variant="standard" 
                    name="email" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} 
                    value={formik.values.email} 
                />

                <Divider />
                {formik.errors.email && formik.touched.email ? <span>*{formik.errors.email}</span> :null }

                <TextField fullWidth 
                    id="fullWidth" 
                    label="Channel" 
                    variant="standard" 
                    name="channel" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.channel} 
                />
                <Divider />
                {formik.errors.email && formik.touched.channel ? <span>*{formik.errors.channel}</span> :null }
                
                <br/><br/><br/>
                <Button  id='btn' variant="contained" type="submit" color="primary">Submit</Button>
            </form>
        </Box>
    )
}

export default YoutubeForm