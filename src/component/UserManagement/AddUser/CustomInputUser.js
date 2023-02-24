import { TextField } from "@mui/material";
import { useField } from "formik";

const CustomInputTruck = ({ setTruck, truck, ...props }) => {
    const [field, meta, {setValue}] = useField(props.field.name);
    // console.log("field", field);
    // console.log("meta", meta);

    const handleOnChange = (e) => {
        console.log(e.target.value)
        setValue(e.target.value)
        setTruck({...truck, [field.name]: e.target.value})
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

export default CustomInputTruck