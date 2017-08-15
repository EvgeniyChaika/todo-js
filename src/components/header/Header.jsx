import React, {PropTypes} from 'react';

import Stats from '../stats/Stats';
import Stopwatch from '../stopwatch/Stopwatch';

export default function Header(props) {
    return (
        <header>
            <Stats tasks={props.tasks}/>
            <h1>{props.title}</h1>
            <Stopwatch/>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired
};
