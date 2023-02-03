import { useField } from "formik";
import Select from 'react-select';

const CustomCheckboxTruck = ({ label, ...props}) => {
    const [field, meta] = useField(props);
    console.log("field", field);
    console.log("meta", meta);

    return (
        <>
            <Select
                {...field}
                {...props}
                className={meta.touched && meta.error ? "input-error" : ""}
            />
            <span>Test</span>
            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </>
    );
};

export default CustomCheckboxTruck
