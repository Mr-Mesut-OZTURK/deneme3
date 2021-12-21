import React, { useState } from 'react'

const styles = {
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        borderBottom: '1px solid',
        paddingBottom: '10px',
    },
    input: {
        padding: '10px',
        width: '100%',
        textAlign: 'center',
        border: '1px solid #ccc'
    }
}

const TodoHeader = ({ addItems, todos }) => {

    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text === "") return alert("Please enter a text")
        let newItem = {
            done: false,
            text: text
        }
        addItems([
            ...todos,
            newItem, 
        ])
        setText("")
    }

    return (
        <form style={styles.container} onSubmit={handleSubmit}>
            <input
                style={styles.input}
                type="text"
                placeholder="What needs to be done?"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </form>
    )
}

export default TodoHeader
