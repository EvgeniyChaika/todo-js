import React, {PropTypes} from 'react';

import Checkbox from "../checkbox/Checkbox";
import Button from "../button/Button";

export default class Task extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderDisplay = this.renderDisplay.bind(this);
        this.renderForm = this.renderForm.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps Task - ", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate Task : nextProps - ", nextProps, ", nextState - ", nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate Task : nextProps - ", nextProps, ", nextState - ", nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate Task : prevProps - ", prevProps, ", prevState - ", prevState);
        if (this.state.editing) {
            this.refs.title.focus();
            this.refs.title.select();
        }
    }

    componentWillUnmount() {
        console.log("componentWillUnmount Task");
    }

    handleSubmit(event) {
        event.preventDefault();
        let title = this.refs.title.value;
        this.props.onEditTask(this.props.id, title);
        this.setState({editing: false});
    }

    renderDisplay() {
        return (
            <div className={`todo${this.props.completed ? ' completed' : ''}`}>
                <Checkbox checked={this.props.completed} onChange={() => this.props.onStatusChange(this.props.id)}/>
                <span className="todo-title">{this.props.title}</span>
                <Button className="edit icon" icon="edit" onClick={() => this.setState({editing: true})}/>
                <Button className="delete icon" icon="delete"
                        onClick={() => this.props.onDeleteTask(this.props.id)}/>
            </div>
        )
    }

    renderForm() {
        return (
            <form className="todo-edit-form" onSubmit={this.handleSubmit}>
                <input type="text" ref="title" defaultValue={this.props.title}/>
                <Button className="save icon" icon="save" type="submit"/>
            </form>
        )
    }

    render() {
        console.log("render Task");
        return this.state.editing ? this.renderForm() : this.renderDisplay();
    }
}

Task.propTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onStatusChange: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    onEditTask: PropTypes.func.isRequired,
    onDeleteTask: PropTypes.func.isRequired
};