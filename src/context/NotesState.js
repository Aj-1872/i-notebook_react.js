import React, { useState } from "react";
import NoteContext from "./NoteContext";



const NotesState = (props) => {

    const s1 = {
        "name": "Harry",
        "class": "5b"
    }

    const [state, setState] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setState({

                "name": "ajay",
                "class": "3f"

            })
        }, 1000);


    }

    return (
        <NoteContext.Provider value={{ state, update }}>

            {props.children}

        </NoteContext.Provider>
    )
}
export default NotesState;