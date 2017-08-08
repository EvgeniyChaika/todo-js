import React, {PropTypes} from 'react';

export default function Button(props) {
    return (
        <button className={props.className} onClick={props.onClick} {...props}>
            {props.icon ? <i className="material-icons">{props.icon}</i> : props.children}
        </button>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node
};