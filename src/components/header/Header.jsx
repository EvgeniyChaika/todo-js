import React, {PropTypes} from 'react';

import Stats from '../stats/Stats';
import Stopwatch from '../stopwatch/Stopwatch';

export default class Header extends React.Component {
    componentDidMount() {
        this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const tasks = this.props.store.getState();
        return (
            <header>
                <Stats tasks={tasks}/>
                <h1>{this.props.title}</h1>
                <Stopwatch/>
            </header>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    store: PropTypes.object.isRequired
};
