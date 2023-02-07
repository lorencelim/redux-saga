import { Select } from "@mui/material";
import { useField } from "formik";

const CustomCheckboxTruck = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    console.log(meta)

    return (
        <>
            <label>{label}</label>
            <Select
                {...field}
                {...props}
                className={meta.touched && meta.error ? "input-error" : ""}
            >
            </Select>
            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </>
    );
};

export default CustomCheckboxTruck
