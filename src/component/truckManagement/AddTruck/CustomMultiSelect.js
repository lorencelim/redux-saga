import Select from 'react-select';
import { useField } from "formik";


function CustomMultiSelect(props) {
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
                isMulti
                onChange={onChange}
                onBlur={setTouched}
                className={touched && error ? "input-error" : ""}
            />
            {touched && error && <div className="error">{error}</div>}
        </>
    );
}

export default CustomMultiSelect
