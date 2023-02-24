
// action is simply a javascript function
// type : mandatory
// additional parameter that you can pass to that particular action

import { INIT_SAVE_NOTES_VALUE, SAVE_NOTES_VALUE_SUCCESSFULL, SAVE_NOTES_VALUE_FAILED  } from "./actionTypes";


export function initSaveNotesValue(noteValue, noteValue2){
    return {
        type : INIT_SAVE_NOTES_VALUE,
        noteValue,
        noteValue2
    }
}

export function initSaveNotesValueSuccessfull(success){
    return {
        type : SAVE_NOTES_VALUE_SUCCESSFULL,
        success
    }
}

export function initSaveNotesValueFailed(failed){
    return {
        type : SAVE_NOTES_VALUE_FAILED,
        failed
    }
}