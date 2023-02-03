import * as yup from "yup";

export const AddTruckSchema = yup.object().shape({

    truck_plate: yup
        .string()
        .matches(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[-])(?=.*[0-9])(?=.{7})/, "Must be in 30A-12345 format")
        .required("Required"),
    cargo_type: yup
        .string()
        .required("Required")
        .oneOf([
            "Computer",
            "Electronics",
            "Vegetables",
            "Kid Toys",
            "Chairs",
            "Tables",
            "Fruits",
            "Wires",
            "Ices",
            "Animals",
            "Masks"
        ]),
    driver: yup
        .string()
        .required("Required")
        .oneOf([
            "Nguyễn Văn A",
            "Nguyễn Văn B",
            "Nguyễn Văn C"
        ]),
    truck_type: yup
        .string()
        .required("Required"),
    price: yup
        .string()
        .required("Required"),
    dimension: yup
        .string()
        .required("Required"),
    parking_address: yup
        .string()
        .max(200, "Maximum 200 character")
        .required("Required"),
    production_year: yup
        .string()
        .required("Required"),
    status: yup
        .string()
        .required("Required")

});

