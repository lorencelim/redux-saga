import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { initSaveNotesValue, initSaveNotesValueSuccessfull } from './containers/addNotes/store/actions';
import { initGetListData } from './containers/notesList/store/actions';


const Abc = () => {

    const navigate = useNavigate();

    const [notesName, setNotesName] = useState("");

    const dispatch = useDispatch();

    const { success } = useSelector(state => state.AddNotesReducer);

    const { notesList, isNotesDataFetching } = useSelector(state => state.NotesListReducer);

    console.log(success);

    useEffect(() => {
        if (success) {
            setNotesName("");
            // navigate("/TruckManagement");
            dispatch(initSaveNotesValueSuccessfull(false));
        }
    }, [success])

    useEffect(() => {
        dispatch(initGetListData())
    }, [])

    const handleOnChange = (e) => {
        const { value } = e.target;
        setNotesName(value);
    }

    // usedispatch method

    const handleClick = () => {
        dispatch(initSaveNotesValue(notesName));
    };

    if (isNotesDataFetching) {
        return (
            <div>Notes data is loading ! Please wait</div>
        )
    }


    return (
        <div className='add-new-note-wrapper'>
            <h1>
                abc
            </h1>

            <div className='form-wrapper'>
                <input
                    name="addTodo"
                    placeholder='Enter Todo Name'
                    onChange={handleOnChange}
                    value={notesName}
                />
                <button onClick={handleClick}>Add Note</button>
            </div>
            <table>
                <tbody>
                    {notesList && notesList.map((item) => (
                        <tr key={item.id} >
                            <td>{item.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Abc