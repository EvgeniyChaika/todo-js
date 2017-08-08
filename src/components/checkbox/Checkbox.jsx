import React, {PropTypes} from 'react';

function Checkbox(props) {
    return (
        <button className="checkbox icon" onClick={props.onChange}>
            <i className="material-icons">{props.checked ? 'check_box' : 'check_box_outline_blank'}</i>
        </button>
    )
}

Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Checkbox;