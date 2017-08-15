import React from 'react';
import {connect} from 'react-redux';

import List from '../components/list/List';
import {editTask, deleteTask, toggleTask} from '../actions/actions';

function mapStateToProps(state) {
    return {
        tasks: state
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
