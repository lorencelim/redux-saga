import { TextField } from "@mui/material";
import { useField } from "formik";

const CustomTextCounter = ({ label, ...props }) => {
    const [field, meta] = useField(props.field.name);
    const parkingWordLimit = 200;

    return (
        <>
            <label>{label}</label>
            <TextField
                {...field}
                {...props}
                value={meta.value}
                inputProps={{ maxLength: parkingWordLimit }}
                helperText={`${meta.value.length}/${parkingWordLimit}`}
                className={meta.touched && meta.error ? "input-error" : ""}
            />
            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </>
    );
};

export default CustomTextCounter