import React, {PropTypes} from 'react';

export default function FilterLink(props) {
    return (
        <a className={props.active ? 'is-active' : ''} onClick={props.onClick}>
            <i className="material-icons">{props.icon}</i>
        </a>
    );
}

FilterLink.propTypes = {
    icon: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};