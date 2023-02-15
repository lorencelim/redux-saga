import { TextField } from "@mui/material";
import { useField } from "formik";

const CustomTextCounter = ({ label, placeholder, ...props }) => {
    const [field, {value}] = useField(props.field.name);
    const parkingWordLimit = 200;

    return (
        <>
            <TextField
                sx={{ m: 1, width:1 }}
                {...field}
                {...props}
                label={placeholder}
                value={value}
                inputProps={{ maxLength: parkingWordLimit }}
                helperText={`${value.length}/${parkingWordLimit}`}
            />
        </>
    );
};

export default CustomTextCounter