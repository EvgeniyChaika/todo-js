import React from 'react';
import {connect} from 'react-redux';

import List from '../components/list/List';
import {editTask, deleteTask, toggleTask} from '../actions/actions';

function getFilteredTasks(tasks, filter) {
    switch (filter) {
        case 'ALL':
            return tasks;
        case 'COMPLETED':
            return tasks.filter(task => task.completed);
        case 'UNCOMPLETED':
            return tasks.filter(task => !task.completed)
    }
}


function mapStateToProps(state) {
    return {
        tasks: getFilteredTasks(state.tasks, state.filter)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onDelete: id => dispatch(deleteTask(id)),
        onToggle: id => dispatch(toggleTask(id)),
        onEdit: (id, title) => dispatch(editTask(id, title))
    }
}

const createContainerFor = connect(mapStateToProps, mapDispatchToProps);

const ListContainer = createContainerFor(List);

export default ListContainer;
