import React, {PropTypes} from 'react';

export default function Button(props) {
    return (
        <button className={props.className}>
            <i className="material-icons">{props.icon}</i>
        </button>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string
};