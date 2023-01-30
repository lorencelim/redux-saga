import React, { useState } from 'react'
import { Form, Formik } from 'formik';
import CustomInputTruck from './CustomInputTruck';
import { AddTruckSchema } from './AddTruckSchema';
import axios from '../../../app/api/axios';
import { Navigate } from 'react-router-dom';

const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await axios.post('/trucks', values);
    actions.resetForm();
    <Navigate to={"./TruckManagement"} />
}

const AddTruck = () => {
    const [success, setSuccess] = useState(false);
    return (
        <>
            <h2>Add Truck Details</h2>
            <Formik initialValues={{
                truck_plate: "",
                cargo_type: "",
                driver: "",
                truck_type: "",
                price: "",
                dimension: "",
                parking_address: "",
                production_year: "",
                status: ""
            }}
                validationSchema={AddTruckSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <CustomInputTruck
                            label="Plate"
                            name="truck_plate"
                            type="text"
                            placeholder="Truck Plate"
                        />
                        <CustomInputTruck
                            label="Cargo"
                            name="cargo_type"
                            type="text"
                            placeholder="Cargo"
                        />
                        <CustomInputTruck
                            label="Driver"
                            name="driver"
                            type="text"
                            placeholder="Driver"
                        />
                        <CustomInputTruck
                            label="Truck Type"
                            name="truck_type"
                            type="text"
                            placeholder="Truck Type"
                        />
                        <CustomInputTruck
                            label="Price"
                            name="price"
                            type="text"
                            placeholder="Price"
                        />
                        <CustomInputTruck
                            label="Dimension"
                            name="dimension"
                            type="text"
                            placeholder="Dimension"
                        />
                        <CustomInputTruck
                            label="Parking"
                            name="parking_address"
                            type="text"
                            placeholder="Parking"
                        />
                        <CustomInputTruck
                            label="ProductionYear"
                            name="production_year"
                            type="text"
                            placeholder="Production Year"
                        />
                        <CustomInputTruck
                            label="Status"
                            name="status"
                            type="text"
                            placeholder="Status"
                        />

                        <button disabled={isSubmitting} type="submit" >
                            Add Truck
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default AddTruck