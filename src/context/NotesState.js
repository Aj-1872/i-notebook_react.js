import React, { useState } from "react";
import NoteContext from "./NoteContext";



const NotesState = (props) => {




    return (
        <NoteContext.Provider value={{}}>

            {props.children}

        </NoteContext.Provider>
    )
}
export default NotesState;