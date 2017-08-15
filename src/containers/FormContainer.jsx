import React, {PropTypes} from 'react';

import Form from '../components/form/Form';
import {addTask} from '../actions/actions';

export default class FormContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.store = this.context.store;

        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(title) {
        this.store.dispatch(addTask(title));
    }

    render() {

        return (
            <Form onAdd={this.handleAdd}/>
        );
    }
}

FormContainer.contextTypes = {
    store: PropTypes.object
};