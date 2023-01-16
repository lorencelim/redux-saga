import React, { useRef } from 'react'

const AddTruck = ({newTruck, setNewTruck, handleSubmit}) => {
    const inputRef = useRef();
    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor='addTruckPlate'>Add Truck</label>
            <input
                autoFocus
                ref={inputRef}
                id='addTruckPlate'
                type='text'
                placeholder='Add Truck Plate'
                required
                value={newTruck}
                onChange={(e) => setNewTruck(e.target.value)}
            />
            <button
                type='submit'
                aria-label='Add Truck'
                onClick={() => inputRef.current.focus()}
            >Add Truck</button>
        </form>
    )
}

export default AddTruck