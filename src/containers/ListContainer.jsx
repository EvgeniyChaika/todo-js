import React, {PropTypes} from 'react';

import List from '../components/list/List';
import {editTask, deleteTask, toggleTask} from '../actions/actions';

export default class ListContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.store = this.context.store;

        this.handleToggle = this.handleToggle.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        this.unsubscribe = this.store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
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
            <List tasks={tasks}
                  onDelete={this.handleDelete}
                  onToggle={this.handleToggle}
                  onEdit={this.handleEdit}
            />
        );
    }
}

ListContainer.contextTypes = {
    store: PropTypes.object
};
