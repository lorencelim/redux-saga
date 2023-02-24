import { useField } from "formik";
import { Autocomplete, TextField } from '@mui/material';

function CustomSelectTruck({ placeholder,truck,setTruck, ...props }) {
    const [field, {touched, error }, { setValue, setTouched }] = useField(props.field.name);
    const onChange = (e, value) => {
        setValue(value);
        setTruck({...truck,[field.name]: value.value});
    };

    return (
        <>
            <Autocomplete
                sx={{ m: 1, width:1 }}
                {...props}
                isOptionEqualToValue={(option, value) => option.value === value.value}
                onOpen={setTouched}
                onChange={onChange}
                renderInput={(value) => (
                    <TextField
                        {...value}
                        label={placeholder}
                        helperText={touched && error ? "Required" : ""} />)}
            />
        </>
    );
};

export default CustomSelectTruck