import { TextField } from "@mui/material";
import { useField } from "formik";

const CustomTextCounter = ({ label, placeholder, ...props }) => {
    const [field, meta] = useField(props.field.name);
    const parkingWordLimit = 200;

    return (
        <>
            <TextField
                sx={{ m: 1, width:1 }}
                {...field}
                {...props}
                label={placeholder}
                value={meta.value}
                inputProps={{ maxLength: parkingWordLimit }}
                helperText={`${meta.value.length}/${parkingWordLimit}`}
            />
        </>
    );
};

export default CustomTextCounter