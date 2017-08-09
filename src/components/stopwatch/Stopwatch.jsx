import React, {PropTypes} from 'react';

import Button from "../button/Button";

export default class Stopwatch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (<section className="stopwatch">
            <div className="stopwatch-time">
                00:00
            </div>
            <div className="stopwatch-controls">
                <Button className="icon" icon="play_arrow"/>
                <Button className="icon" icon="stop"/>
            </div>
        </section>);
    }
}

Stopwatch.propTypes = {};