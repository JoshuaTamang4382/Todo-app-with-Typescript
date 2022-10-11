import React from "react";
import Todo from "../models/todo";
import TodoItem from "./todoItem";
import classes from "./Todos.module.css";

// function Todos(props: { items : string[], children : any}) {
const Todos: React.FC<{items : Todo[]; onRemoveTodo : (id: string) => void }> = (props) => {
    return (
        <ul className={classes.todos}>
            {props.items.map((item) => (
                <TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null,item.id)}/>
                // <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default Todos;