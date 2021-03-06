import React, {PropTypes} from 'react';
import Task from '../task/Task';

export default function List(props) {
    return (
        <section className="todo-list">
            {!props.fetching && props.tasks.length ?
                props.tasks.map((task) =>
                    <Task key={task.id}
                          id={task.id}
                          title={task.title}
                          completed={task.completed}
                          onStatusChange={props.onToggle}
                          onDeleteTask={props.onDelete}
                          onEditTask={props.onEdit}/>
                )
                :
                <div className="loading">Downloading...</div>
            }
        </section>
    );
}

List.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })).isRequired,
    onToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};