import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { initSaveNotesValue, initSaveNotesValueSuccessfull } from './containers/note/addNotes/store/actions';
import { initGetListData } from './containers/note/notesList/store/actions';


const Abc = () => {

    const navigate = useNavigate();
    const [notesName, setNotesName] = useState("");
    const dispatch = useDispatch();
    const { success } = useSelector(state => state.AddNotesReducer);
    const { notesList, isNotesDataFetching } = useSelector(state => state.NotesListReducer);
    console.log(notesList);

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
        setNotesName({
            ...notesName,
            [e.target.name]: e.target.value
          });
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
                    // value={notesName}
                />
                <input
                    name="addTodo2"
                    placeholder='Enter Todo Name2'
                    onChange={handleOnChange}
                    // value={notesefg}
                />
                <button onClick={handleClick}>Add Note</button>
            </div>
            <table>
                <tbody>
                    {notesList && notesList.map((item) => (
                        <tr key={item.id} >
                            <td>{item.abc}</td>
                            <td>{item.efg}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Abc