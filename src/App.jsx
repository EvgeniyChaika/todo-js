import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import axios from 'axios';

import Header from "./components/header/Header";
import Task from "./components/task/Task";
import Form from "./components/form/Form";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    componentDidMount() {
        axios.get('/api/tasks')
            .then(res => res.data)
            .then(tasks => this.setState({tasks}))
            .catch(this.handleError)
    }

    handleStatusChange(id) {
        axios.patch(`/api/tasks/${id}`)
            .then(response => {
                const tasks = this.state.tasks.map(task => {
                    if (task.id === id) {
                        task = response.data;
                    }
                    return task;
                });
                this.setState({tasks});
            })
            .catch(this.handleError)
    }

    handleDelete(id) {
        axios.delete(`/api/tasks/${id}`)
            .then(() => {
                const index = this.state.tasks.findIndex(task => task.id === id);
                let tasks = [...this.state.tasks.slice(0, index), ...this.state.tasks.slice(index + 1)];
                this.setState({tasks});
            })
            .catch(this.handleError);
    }

    handleAdd(title) {
        axios.post('/api/tasks', {title})
            .then(response => response.data)
            .then(task => {
                let tasks = [...this.state.tasks, task];
                this.setState({tasks});
            })
            .catch(this.handleError);
    }

    handleEdit(id, title) {
        axios.put(`/api/tasks/${id}`, {title})
            .then(response => {
                const tasks = this.state.tasks.map(task => {
                    if (task.id === id) {
                        task = response.data;
                    }
                    return task;
                });
                this.setState({tasks});
            })
            .catch(this.handleError);
    }

    handleError(error) {
        console.error(error);
    }

    render() {
        return (
            <main>
                <Header title={this.props.title} tasks={this.state.tasks}/>
                <ReactCSSTransitionGroup component="section"
                                         className="todo-list"
                                         transitionName="slide"
                                         transitionAppear={true}
                                         transitionAppearTimeout={500}
                                         transitionEnterTimeout={500}
                                         transitionLeaveTimeout={500}>
                    {this.state.tasks.map((todo) =>
                        <Task key={todo.id}
                              id={todo.id}
                              title={todo.title}
                              completed={todo.completed}
                              onStatusChange={this.handleStatusChange}
                              onDeleteTask={this.handleDelete}
                              onEditTask={this.handleEdit}/>
                    )}
                </ReactCSSTransitionGroup>
                <Form onAdd={this.handleAdd}/>
            </main>
        );
    }
}

App.propTypes = {
    title: PropTypes.string
};

App.defaultProps = {
    title: "React ToDo"
};

ReactDOM.render(<App/>, document.getElementById('app'));
