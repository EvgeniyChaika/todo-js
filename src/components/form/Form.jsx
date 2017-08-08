import React, {PropTypes} from 'react';
import Button from "../button/Button";

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let title = this.refs.title.value;
        if (title) {
            this.props.onAdd(title);
            this.refs.title.value = '';
        }
    }

    render() {
        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <input type="text" ref="title" placeholder="What do we have to do?"/>
                <Button type="submit">Add</Button>
            </form>
        )
    }
}

Form.propTypes = {
    onAdd: PropTypes.func.isRequired
};