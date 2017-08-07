import React, {PropTypes} from 'react';

export default function Checkbox(props) {
    return (
        <button className="checkbox icon">
            <i className="material-icons">check_box_outline_blank</i>
        </button>
    );
}

Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired
};
