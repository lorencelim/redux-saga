import { TextField } from "@mui/material";
import { useField } from "formik";

const CustomInputSignIn = ({ setUser, user, ...props }) => {
    const [field, meta, {setValue}] = useField(props.field.name);
    const handleOnChange = (e) => {
        setValue(e.target.value)
        setUser({...user, [field.name]: e.target.value})
    }

    return (
        <>
            <TextField
                sx={{ m: 1, width: 1 }}
                {...field}
                {...props}
                onChange={handleOnChange}
                value={meta.value}
                helperText={meta.touched && meta.error ? meta.error : ""}
            />
        </>
    );
};

export default CustomInputSignIn