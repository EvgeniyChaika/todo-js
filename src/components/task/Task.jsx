import React, {PropTypes} from 'react';

import Checkbox from "../checkbox/Checkbox";
import Button from "../button/Button";

export default function Task(props) {
    return (
        <div className={`todo${props.completed ? ' completed' : ''}`}>
            <Checkbox initiallyChecked={props.completed}/>
            <span className="todo-title">{props.title}</span>
            <Button className="delete icon" icon="delete"/>
        </div>
    );
}

Task.propTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
};