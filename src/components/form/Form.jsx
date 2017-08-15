import React, {PropTypes} from 'react';

import Button from "../button/Button";

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };

        this.store = this.props.store;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let title = event.target.value;
        this.setState({title});
    }

    handleSubmit(event) {
        event.preventDefault();
        const title = this.state.title;
        if (title) {
            this.props.onAdd(title);
            this.setState({
                title: ''
            });
        }
    }

    render() {
        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <input type="text"
                       value={this.state.title}
                       placeholder="What do we have to do?"
                       onChange={this.handleChange}/>
                <Button type="submit">Add</Button>
            </form>
        )
    }
}

Form.propTypes = {
    onAdd: PropTypes.func.isRequired
};