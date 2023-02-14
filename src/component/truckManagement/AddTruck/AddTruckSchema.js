import * as yup from "yup";

export const AddTruckSchema = yup.object().shape({

    truck_plate: yup
        .string()
        .matches(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[-])(?=.*[0-9])(?=.{7})/, "Must be in 30A-12345 format")
        .required("Required"),
    cargo_type: yup
        .array()
        .min(1, "Minimum 1 selection")
        .max(10, "Maximum 10 Select")
        .of(
            yup.object().shape({
                label: yup.string().required(),
                value: yup.string().required()
            })
        )
        .ensure(),
    driver: yup
        .object()
        .default(undefined)
        .required("Required"),
    truck_type: yup
        .string(),
    price: yup
        .string(),
    dimension: yup
        .string(),
    parking_address: yup
        .string()
        .max(200, "Maximum 200 character"),
    production_year: yup
        .string(),
    status: yup
        .string()
});

