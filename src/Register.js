import React from "react";
import { useFormik } from "formik";
import { Button } from "@mui/material";

export default function Register(){
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName:"",
            email: ""
        },
        onSubmit: (values) => {
console.log(values);
        },
    });


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
                ></input>
            </div>
            <div className="input-container">
                <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                onChange={formik.handleChange}
                value={formik.values.LastName}
                ></input>
            </div>
            <div className="input-container">
                <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
                ></input>
            </div>
            <Button type="submit" variant="outlined">Submit</Button>
        </form>
    )
}