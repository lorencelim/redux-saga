import React, { useRef } from 'react'
import { Form, Formik } from 'formik';
import CustomInputTruck from './CustomInputTruck';
import { AddTruckSchema } from './AddTruckSchema';



const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
}

const addTruck = ({ newTruck, setNewTruck, handleSubmit }) => {
    // const inputRef = useRef();

    // const number_REGEX = /^(?=.*[0-9])/;
    // const formik = useFormik({
    //     initialValues: {
    //         truckplate: '',
    //         cargotype: '',
    //         driver: '',
    //         trucktype: '',
    //         dimension: '',
    //         parkingAddress: '',
    //         productionYear: '',
    //         status: ''
    //     },
    //     validationSchema: Yup.object({
    //         truckplate: Yup.string()
    //             .required('required')
    //             .matches(truckPlate_REGEX, 'Must be in 30A-12345 format'),
    //         cargotype: Yup.string()
    //             .required('required'),
    //         driver: Yup.string()
    //             .required('required'),
    //         trucktype: Yup.string()
    //             .required('required'),
    //         dimension: Yup.string()
    //             .required('required'),
    //         parkingAddress: Yup.string()
    //             .required('required'),
    //         productionYear: Yup.string()
    //             .required('required')
    //             .matches(number_REGEX),
    //         status: Yup.string()
    //             .required('required')
    //     }),
    //     onSubmit: (values) => {
    //         console.log(values);
    //     },
    // });



    return (
        <>
            <h2>Add Truck Details</h2>
            <Formik initialValues={{ truck_plate: "", cargo_type:"", driver:"", truck_type:"",
            price:"", dimension:"", parking_address:"", production_year:"", status:""  }}
                validationSchema={AddTruckSchema}
                onSubmit={onSubmit}
            >

                {({ isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <CustomInputTruck
                            label="Plate"
                            name="truck_plate"
                            // ref={inputRef}
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


        //     <label htmlFor='addTruckPlate'>Add Truck</label>
        //     <div><input
        //         autoFocus
        //         ref={plateRef}
        //         id='truckPlate'
        //         type='text'
        //         placeholder='Truck Plate'
        //         required
        //         value={newTruck}
        //         onChange={(e) => setNewTruck(e.target.value)}
        //     />
        //         <input
        //             autoFocus
        //             ref={cargoRef}
        //             id='cargoType'
        //             type='text'
        //             placeholder='Cargo Type'
        //             required
        //             value={newTruck}
        //             onChange={(e) => setNewTruck(e.target.value)}
        //             onBlur={formik.handleBlur}
        //         />
        //         <input
        //             autoFocus
        //             ref={driverRef}
        //             id='driver'
        //             type='text'
        //             placeholder='Driver'
        //             required
        //             value={newTruck}
        //             onChange={(e) => setNewTruck(e.target.value)}
        //             onBlur={formik.handleBlur}
        //         />
        //         <input
        //             autoFocus
        //             ref={typeRef}
        //             id='truckType'
        //             type='text'
        //             placeholder='Truck Type'
        //             required
        //             value={newTruck}
        //             onChange={(e) => setNewTruck(e.target.value)}
        //             onBlur={formik.handleBlur}
        //         />
        //         <input
        //             autoFocus
        //             ref={dimensionRef}
        //             id='dimension'
        //             type='text'
        //             placeholder='Dimension'
        //             required
        //             value={newTruck}
        //             onChange={(e) => setNewTruck(e.target.value)}
        //         />
        //         <input
        //             autoFocus
        //             ref={parkingRef}
        //             id='parkingAddress'
        //             type='text'
        //             placeholder='parkingAddress'
        //             required
        //             value={newTruck}
        //             onChange={(e) => setNewTruck(e.target.value)}
        //         />
        //         <input
        //             autoFocus
        //             ref={productionRef}
        //             id='productionYear'
        //             type='text'
        //             placeholder='Production Year'
        //             required
        //             value={newTruck}
        //             onChange={(e) => setNewTruck(e.target.value)}
        //         />
        //         <input
        //             autoFocus
        //             ref={statusRef}
        //             id='status'
        //             type='text'
        //             placeholder='Status'
        //             required
        //             value={newTruck}
        //             onChange={(e) => setNewTruck(e.target.value)}
        //         />
        //     </div>
        //     <button
        //         type='submit'
        //         aria-label='Add Truck'
        //         onClick={() => inputRef.current.focus()}
        //     >Add Truck</button>
        // </form>
    )
}

export default addTruck