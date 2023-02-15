import { useField } from "formik";
import { Autocomplete, TextField } from '@mui/material';

function CustomMultiSelect({ placeholder, ...props }) {
    const [field, { value, touched, error }, { setValue, setTouched }] = useField(props.field.name);
    const onChange = (e, value) => {
        setValue(value);
    };

    return (
        <>
            <Autocomplete
                sx={{ m: 1, width:1 }}
                {...props}
                multiple
                isOptionEqualToValue={(option, value) => option.value === value.value}
                onOpen={setTouched}
                onChange={onChange}
                renderInput={(value) => (
                    <TextField
                        {...value}
                        label={placeholder}
                        helperText={touched && error ? error : ""} />)}

            />
        </>
    );
};

export default CustomMultiSelect
