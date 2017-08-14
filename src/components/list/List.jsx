import React, {PropTypes} from 'react';
import {editTask, deleteTask, toggleTask} from '../../actions/index';
import Task from '../task/Task';


export default class List extends React.Component {
    constructor(props) {
        super(props);

        this.store = this.props.store;

        this.handleToggle = this.handleToggle.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleToggle(id) {
        this.store.dispatch(toggleTask(id));
    }

    handleDelete(id) {
        this.store.dispatch(deleteTask(id));
    }

    handleEdit(id, title) {
        this.store.dispatch(editTask(id, title));
    }

    render() {
        const tasks = this.store.getState();
        return (
            <section className="todo-list">
                {tasks.map((task) =>
                    <Task key={task.id}
                          id={task.id}
                          title={task.title}
                          completed={task.completed}
                          onStatusChange={this.handleToggle}
                          onDeleteTask={this.handleDelete}
                          onEditTask={this.handleEdit}/>
                )}
            </section>
        );
    }
}

List.propTypes = {
    store: PropTypes.object.isRequired
};