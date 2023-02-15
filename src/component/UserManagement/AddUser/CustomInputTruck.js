import { TextField } from "@mui/material";
import { useField } from "formik";

const CustomInputTruck = ({ label, placeholder, ...props }) => {
    const [field, meta] = useField(props);
    // console.log("field", field);
    // console.log("meta", meta);

    return (
        <>
            <TextField
                sx={{ m: 1, width: 1 }}
                label={placeholder}
                {...field}
                {...props}
                helperText={meta.touched && meta.error ? meta.error : ""}
            />
        </>
    );
};

export default CustomInputTruck