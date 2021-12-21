import React from 'react'

const styles = {
    container: {
        padding: '20px 0',
        display: 'flex',
        flexDirection: 'column',
        // grid:"10px",
        // backgroundColor: 'red',
    },
    item_container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px',
        padding: '5px 10px'
    },
    done: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px',
        textDecoration: 'line-through',
        backgroundColor: '#4b4b4b',
        color: '#a0a0a0',
        padding: '5px 10px'
    },
    button: {
        backgroundColor: '#f30202',
        padding: '3px 7px',
        border: 'none',
        borderRadius: '5px',
        color: '#fff',
        
    }
}

const TodoList = ({ todos, setDone, filteredList }) => {

    const handleChange = (e) => {
        let text = e.target.parentNode.childNodes[1].textContent
        const newdodos = todos.map(todo =>{
            if(todo.text === text){
                return {done:e.target.checked, text}
            }
            return todo
        })
        setDone([...newdodos])
    }

    const delItem = (e) => {
        let text = e.target.parentNode.childNodes[1].textContent
        const newdodos = todos.filter(todo =>{
            if(todo.text !== text){
                return todo
            }
        })
        setDone([...newdodos])
    }

    return (
        <section style={styles.container}>
            {
                filteredList.map((todo, index) => (
                    <div 
                    key={index} 
                    style={
                        todo.done === true?
                        {backgroundColor: index%2 ? '#4c7c6a': '#bbb', ...styles.done}
                        :
                        {backgroundColor: index%2 ? '#4c7c6a': '#bbb' ,...styles.item_container}
                    }

                    >
                        <input 
                            type="checkbox"
                            // value={todo.done}
                            checked={todo.done}
                            onChange={handleChange}
                        />
                        <label >{todo.text}</label>
                        <button
                            style={styles.button}
                            onClick={delItem}
                        >x</button>
                    </div>
                ))
            }

        </section>
    )
}

export default TodoList
