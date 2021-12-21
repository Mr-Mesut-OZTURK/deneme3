import React, { useState, useEffect } from 'react'
import './TodoApp.modul.css'
import TodoHeader from './header/TodoHeader'
import TodoList from './list/TodoList'
import TodoFooter from './footer/TodoFooter'

const styles ={
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // alignItems: 'str',
        // border: "1px solid",
        maxWidth: "600px",
        minWidth: "250px",
        margin: "150px auto",

        padding: '10px',
        boxShadow: "5px 3px 10px 0px #00000063"
    },
    title: {
        position: "absolute",
        top: '50px',
        fontSize: '4em',
        color: '#ca000097',
    }
}
const TodoApp = () => {

    const [list, setList] = useState([])
    const [filteredList, setFilteredList] = useState([])

    useEffect(() => {
        filterList()
    }, [list])

    const filterList = (param="all") => {
        const filteredList = list.filter((item) => {
            if(param === "all") return true;
            else if(param === "true") return !item.done;
            else if(param === "false") return item.done;
        })
        setFilteredList(filteredList)
    }

    const clearCompleted = () => {
        const newList = list.filter((item) => !item.done)
        setList(newList)
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Todos</h1>
            <TodoHeader addItems={setList} todos={list}/>
            <TodoList todos={list} setDone={setList} filteredList={filteredList} />
            <TodoFooter todos={list} filterList={filterList} clearCompleted={clearCompleted} />
        </div>
    )
}

export default TodoApp
