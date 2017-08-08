import React from 'react';
import Button from "../button/Button";

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <form className="todo-form">
                <input type="text" placeholder="What do we have to do?"/>
                <Button type="submit">Add</Button>
            </form>
        )
    }
}

Form.propTypes = {};