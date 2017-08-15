import React from 'react';
import {connect} from 'react-redux';

import Form from '../components/form/Form';
import {addTask} from '../actions/actions';

function mapDispatchToProps(dispatch) {
    return {
        onAdd: title => dispatch(addTask(title))
    };
}

const FormContainer = connect(null, mapDispatchToProps)(Form);

export default FormContainer;