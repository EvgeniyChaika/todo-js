import React, {PropTypes} from 'react';

export default function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
};
