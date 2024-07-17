import React from 'react';
import {Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {registerUser} from "../../State/Authentication/Action";
import * as Yup from "yup";

const initialValues = {
    fullName:"",
    email: "",
    password: "",
    role:"ROLE_CUSTOMER"
}
const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 8 characters")
        .required("Password is required"),
    role: Yup.string().required("Type is required"),
});
const RegisterForm = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleSubmit=(values)=>{
        console.log("Form value",values);
        dispatch(registerUser({userData:values,navigate}))
    }
    return (
        <div>
            <Typography variant="h5" className="text-center">
                Register
            </Typography>
            <Formik
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
                initialValues={initialValues}>

                <Form>
                    <Field
                        as={TextField}
                        name="fullName"
                        label="Full Name"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
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
                        <Field
                            fullWidth
                            margin="normal"
                            as={Select}
                            labelId="role-simple-select-label"
                            id="demo-simple-select"
                            name="role"
                            // value={age}
                            // onChange={handleChange}
                        >
                            <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                            <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
                        </Field>
                    <Button sx={{mt: 2, padding: "1rem"}} fullWidth type="submit" variant="contained">
                        Register
                    </Button>
                </Form>
            </Formik>

            <Typography variant="body2" align="center" sx={{mt: 3}}>
                If you have an account already?
                <Button size="small" onClick={() => navigate("/account/login")}>
                    Login
                </Button>
            </Typography>
        </div>
    );
};

export default RegisterForm;
