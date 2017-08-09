import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'whatwg-fetch';

import Header from "./components/header/Header";
import Task from "./components/task/Task";
import Form from "./components/form/Form";

import tasks from "./tasks";

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor App");
        this.state = {
            tasks: []
        };
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentWillMount() {
        console.log("componentWillMount App");
    }

    componentDidMount() {
        console.log("componentDidMount App");
        fetch('/api/tasks')
            .then(res => res.json())
            .then(tasks => this.setState({tasks}))
            .catch(error => console.error(error))
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate App : nextProps - ", nextProps, ", nextState - ", nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate App : nextProps - ", nextProps, ", nextState - ", nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate App : prevProps - ", prevProps, ", prevState - ", prevState);
    }

    nextId() {
        this._nextId = this._nextId || 4;
        return this._nextId++;
    }

    handleStatusChange(id) {
        let tasks = this.state.tasks.map(task => {
            if (task.id === id) {
                task.completed = !task.completed
            }
            return task;
        });
        this.setState({tasks});
    }

    handleDelete(id) {
        let tasks = this.state.tasks.filter(task => task.id !== id);
        this.setState({tasks});
    }

    handleAdd(title) {
        let task = {
            id: this.nextId(),
            title,
            completed: false
        };
        let tasks = [...this.state.tasks, task];
        this.setState({tasks});
    }

    handleEdit(id, title) {
        let tasks = this.state.tasks.map(task => {
            if (task.id === id) {
                task.title = title;
            }
            return task;
        });
        this.setState({tasks})
    }

    render() {
        console.log("render App");
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
    title: PropTypes.string,
    initialData: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }
    )).isRequired
};

App.defaultProps = {
    title: "React ToDo"
};

ReactDOM.render(<App initialData={tasks}/>, document.getElementById('app'));
