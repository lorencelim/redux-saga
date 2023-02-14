import Select from 'react-select';
import { useField } from "formik";
import { Autocomplete, TextField } from '@mui/material';

function CustomSelectTruck({ placeholder, ...props }) {
    const [field, { touched, error }, { setValue, setTouched }] = useField(props.field.name);
    const onChange = (e, value) => {
        setValue(value)
    };

    return (
        <>
            <Autocomplete
                sx={{ m: 1, width:1 }}
                {...props}
                isOptionEqualToValue={(option, value) => option.value === value.value}
                onOpen={setTouched}
                freeSolo
                onChange={onChange}
                renderInput={(value) => (
                    <TextField
                        {...value}
                        label={placeholder}
                        helperText={touched && error ? "Required" : ""} />)}
            />
        </>
    );
}

export default CustomSelectTruck