import { useField } from "formik";

const CustomSelectTruck = ({label, ...props}) => {
    const [field, meta] = useField(props);
    // console.log("field", field);
    // console.log("meta", meta);
    
    return (
        <>
            <label>{label}</label>
            <select
                {...field}
                {...props}
                className={meta.touched && meta.error ? "input-error" : ""}
            />
            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </>
    );
};

export default CustomSelectTruck