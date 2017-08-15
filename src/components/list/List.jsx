import React, {PropTypes} from 'react';
import Task from '../task/Task';


export default function List(props) {
    return (
        <section className="todo-list">
            {props.tasks.map((task) =>
                <Task key={task.id}
                      id={task.id}
                      title={task.title}
                      completed={task.completed}
                      onStatusChange={props.onToggle}
                      onDeleteTask={props.onDelete}
                      onEditTask={props.onEdit}/>
            )}
        </section>
    );
}

List.propTypes = {
    tasks: PropTypes.array.isRequired,
    onToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};