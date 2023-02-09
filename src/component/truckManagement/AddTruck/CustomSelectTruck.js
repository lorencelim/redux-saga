import Select from 'react-select';
import { useField } from "formik";

const CustomSelectTruck = ({label, ...props}) => {
//     const [field, meta] = useField(props);
//     // console.log("field", field);
//     // console.log("meta", meta);
    
//     return (
//         <>
//             <label>{label}</label>
//             <select
//                 {...field}
//                 {...props}
//                 className={meta.touched && meta.error ? "input-error" : ""}
//             />
//             {meta.touched && meta.error && <div className="error">{meta.error}</div>}
//         </>
//     );
// };

const [field, { value, touched, error }, { setValue, setTouched }] = useField(props.field.name);
console.log(value)
const onChange = (value) => {
    setValue(value);
};

return (
    <>
        <Select
            {...props}
            value={value}
            onChange={onChange}
            onBlur={setTouched}
            className={touched && error ? "input-error" : ""}
        />
        {touched && error && <div className="error">{error}</div>}
    </>
);
}

export default CustomSelectTruck