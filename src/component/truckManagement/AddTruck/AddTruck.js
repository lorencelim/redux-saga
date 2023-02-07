import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import CustomInputTruck from './CustomInputTruck';
import CustomSelectTruck from './CustomSelectTruck';
import { AddTruckSchema } from './AddTruckSchema';
import axios from '../../../app/api/axios';
import { Navigate } from 'react-router-dom';
import CustomCheckboxTruck from './CustomCheckboxTruck';
import MenuItem from '@mui/material/MenuItem';


const AddTruck = ({ setTrucks }) => {
    const [truckPostSuccess, setTruckPostSuccess] = useState(false);
    const [values, setValues] = useState([]);
    console.log(values)
    
    const handleChangeValues = (e) => {
        setValues(() => e.target.value)
    }

    const addTruckSubmit = async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 100));
        setTrucks(await axios.post('/trucks', values));
        setTruckPostSuccess(true);
    };

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
                onSubmit={addTruckSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <CustomInputTruck
                            label="Truck Plate"
                            name="truck_plate"
                            type="text"
                            placeholder="Truck Plate"
                        />
                        <CustomCheckboxTruck
                            label="Cargo Type"
                            name="cargo_type"
                            value={values}
                            onChange={handleChangeValues}
                            multiple={true}
                        >
                            <MenuItem value="Computer">Computer</MenuItem>
                            <MenuItem value="Electronics">Electronics</MenuItem>
                            <MenuItem value="Vegetables">Vegetables</MenuItem>
                            <MenuItem value="Kid Toys">Kid Toys</MenuItem>
                            <MenuItem value="Chairs">Chairs</MenuItem>
                            <MenuItem value="Tables">Tables</MenuItem>
                            <MenuItem value="Fruits">Fruits</MenuItem>
                            <MenuItem value="Wires">Wires</MenuItem>
                            <MenuItem value="Ices">Ices</MenuItem>
                            <MenuItem value="Animals">Animals</MenuItem>
                            <MenuItem value="Masks">Masks</MenuItem>
                        </CustomCheckboxTruck>
                        <CustomSelectTruck
                            label="Driver"
                            name="driver"
                        >
                            <option value="">Please select a driver</option>
                            <option value="Nguyễn Văn A">Nguyễn Văn A</option>
                            <option value="Nguyễn Văn B">Nguyễn Văn B</option>
                            <option value="Nguyễn Văn C">Nguyễn Văn C</option>
                        </CustomSelectTruck>
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
                        <button disabled={isSubmitting} type="submit">
                            Add Truck
                        </button>
                    </Form>
                )}
            </Formik>
            {truckPostSuccess ?
                (
                    <Navigate to={"/TruckManagement"} />
                ) : (
                    null
                )}
        </>
    )
}

export default AddTruck