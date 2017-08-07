import React, {PropTypes} from 'react';
import Checkbox from "../checkbox/Checkbox";

export default function Task(props) {
    return (
        <div className="todo">
            <Checkbox checked={props.completed}/>
            <span className="todo-title">{props.title}</span>
            <button className="delete icon">
                <i className="material-icons">delete</i>
            </button>
        </div>
    );
}

Task.propTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
};