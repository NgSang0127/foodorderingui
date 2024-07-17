import React from 'react';
import {Button, Grid, TextField, Typography} from "@mui/material";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {loginUser} from "../../State/Authentication/Action";
import {useDispatch} from "react-redux";
import * as Yup from "yup";

const initialValues = {
    email: "",
    password: ""
}
const validationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    password: Yup.string().required("Password is required"),
});
const LoginForm = () => {
    const handleSubmit = (values) => {
        dispatch(loginUser({userData: values,navigate}))

    }
    const navigate=useNavigate();
    const dispatch=useDispatch();
    return (
        <div>
            <Typography variant="h5" className="text-center">
                Login
            </Typography>
            <Formik
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
                initialValues={initialValues}>

                <Form>
                    <Field
                        as={TextField}
                        name="email"
                        label="Email"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <Field
                        as={TextField}
                        name="password"
                        label="Password"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        type="password"
                    />
                    <Button sx={{mt:2,padding:"1rem"}} fullWidth type="submit" variant="contained">
                        Login
                    </Button>
                </Form>
            </Formik>

            <Typography variant="body2" align="center" sx={{mt:3}}>
                Don't have an account ?
                <Button size="small" onClick={()=>navigate("/account/register")}>
                    Register
                </Button>
            </Typography>
        </div>
    );
};

export default LoginForm;
