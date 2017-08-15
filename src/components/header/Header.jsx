import React, {PropTypes} from 'react';

import Stats from '../stats/Stats';
import Stopwatch from '../stopwatch/Stopwatch';

import {HEADER_TITLE} from '../../consts/consts';

export default function Header(props) {
    return (
        <header>
            <Stats tasks={props.tasks}/>
            <h1>{HEADER_TITLE}</h1>
            <Stopwatch/>
        </header>
    );
}

Header.propTypes = {
    tasks: PropTypes.array.isRequired
};
