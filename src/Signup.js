import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Button } from "@mui/material";

function SignUp() {
    const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    const formik = useFormik({
        initialValues: {
            id: "",
            password: ""
        },
        validationSchema: Yup.object({
            id: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("required"),
            password: Yup.string()
            .matches(passwordRules, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });

    console.log(formik.touched);

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="input-container">
                <input
                    id="id"
                    name="id"
                    type="text"
                    placeholder="ID"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.id}
                />
                {formik.errors.id ? <p>{formik.errors.id}</p> : null}
            </div>
            <div className="input-container">
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.password ? <p>{formik.errors.password}</p> : null}
            </div>
            <Button type="submit" variant="outlined">Sign Up</Button>
        </form>
    )
}

export default SignUp;