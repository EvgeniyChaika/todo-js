import React, {PropTypes} from 'react';
import Stats from "../stats/Stats";

export default function Header(props) {
    return (
        <header>
            <Stats tasks={props.tasks}/>
            <h1>{props.title}</h1>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }))
};
