import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/header/Header";
import Task from "./components/task/Task";

import tasks from "./tasks";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: this.props.initialData
        };
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
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

    render() {
        return (
            <main>
                <Header title={this.props.title} tasks={this.state.tasks}/>
                <section className="todo-list">
                    {this.state.tasks.map((todo) =>
                        <Task key={todo.id}
                              id={todo.id}
                              title={todo.title}
                              completed={todo.completed}
                              onStatusChange={this.handleStatusChange}
                              onDeleteTask={this.handleDelete}/>
                    )}
                </section>
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
