import React from 'react';
import {connect} from 'react-redux';

import List from '../components/list/List';
import {editTask, deleteTask, toggleTask} from '../actions/actions';
import {getFilteredTasks} from '../reducers/reducers';

function mapStateToProps(state) {
    return {
        tasks: getFilteredTasks(state)
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
