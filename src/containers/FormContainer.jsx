import React, {PropTypes} from 'react';

import Form from '../components/form/Form';
import {addTask} from '../actions/actions';

export default class FormContainer extends React.Component {
    constructor(props) {
        super(props);

        this.store = this.props.store;

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

FormContainer.propTypes = {
    store: PropTypes.object.isRequired
};