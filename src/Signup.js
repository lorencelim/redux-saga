import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Button } from "@mui/material";

export default function Signup() {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            password: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("required"),
            password: Yup.string()
                .required(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
                  )
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
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
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
                {formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p> : null}
            </div>
            <Button type="submit" variant="outlined">Login</Button>
        </form>
    )
}