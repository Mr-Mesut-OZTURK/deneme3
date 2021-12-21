import React from 'react'

const styles= {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '20px 0 10px',
        borderTop: '1px solid #222',
        flexWrap: 'wrap',
        alignContent: 'space-between',
    },
    button_container: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: '10px',
        margin: '10px 0'
    },
    button: {
        padding: '8px 10px',
        backgroundColor: '#008100',
        border: 'none',
        borderRadius: '5px',
        color: 'white'
    }
}

const TodoFooter = ({ todos, filterList, clearCompleted }) => {

    return (
            <footer style={styles.container}>
                <span >
                   {todos.filter(todo => todo.done === true).length} / {todos.length}
                </span>

                <div style={styles.button_container}>
                        <button style={styles.button} onClick={() => filterList("all")}>All</button>
                        <button style={styles.button} onClick={() => filterList("true")}>Active</button>
                        <button style={styles.button} onClick={() => filterList("false")}>Completed</button>
                </div>

                <button style={styles.button} onClick={clearCompleted}>
                    Clear completed
                </button>
            </footer>
    )
}

export default TodoFooter
