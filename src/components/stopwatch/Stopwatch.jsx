import React from 'react';

import Button from "../button/Button";

export default class Stopwatch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            running: false,
            elapsed: 0,
            lastTick: 0
        };
        this.handleStart = this.handleStart.bind(this);
        this.handlePause = this.handlePause.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        if (this.state.running) {
            let now = Date.now();
            let difference = now - this.state.lastTick;

            this.setState({
                elapsed: this.state.elapsed + difference,
                lastTick: now
            })
        }
    }

    formatTime(milliseconds) {
        let totalSeconds = Math.floor(milliseconds / 1000);
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        return `${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`;
    }

    handleStart() {
        this.setState({
            running: true,
            lastTick: Date.now()
        });
    }

    handlePause() {
        this.setState({running: false});
    }

    handleStop() {
        this.setState({
            running: false,
            elapsed: 0,
            lastTick: 0
        });
    }

    render() {
        let time = this.formatTime(this.state.elapsed);
        return (<section className="stopwatch">
            <div className="stopwatch-time">{time}</div>
            <div className="stopwatch-controls">
                {this.state.running ?
                    <Button className="icon" icon="pause" onClick={this.handlePause}/>
                    :
                    <Button className="icon" icon="play_arrow" onClick={this.handleStart}/>
                }
                <Button className="icon" icon="stop" onClick={this.handleStop}/>
            </div>
        </section>);
    }
}
