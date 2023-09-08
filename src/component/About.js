import React, { useEffect } from 'react'
import { useContext } from 'react'
import NoteContext from '../context/NoteContext'

const About = () => {
    const a = useContext(NoteContext)
    useEffect(() => {
        a.update()
    }, [])
    return (
        <div>About {a.state.name}</div>
    )
}

export default About