import { TextField } from "@mui/material";
import { useField } from "formik";

const CustomTextCounter = ({  truck, setTruck, ...props }) => {
    const [field, meta, { setValue }] = useField(props.field.name);
    const parkingWordLimit = 200;
    const handleOnChange = (e) => {
        setValue(e.target.value)
        setTruck({...truck,[field.name]: e.target.value})
    }

    return (
        <>
            <TextField
                sx={{ m: 1, width: 1 }}
                {...field}
                {...props}
                onChange={handleOnChange}
                value={meta.value}
                helperText={`${meta.value.length}/${parkingWordLimit}`}

            />
        </>
    );
};

export default CustomTextCounter