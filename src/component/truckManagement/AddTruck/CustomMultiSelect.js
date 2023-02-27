import { useField } from "formik";
import { Autocomplete, TextField } from "@mui/material";

function CustomMultiSelect({ placeholder, truck, setTruck, ...props }) {
    const [field, { touched, error }, { setValue, setTouched }] = useField(props.field.name);
    const onChange = (e, value) => {
        setValue(value);
        setTruck({...truck,[field.name]: value.map(item=>item.value)});
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
