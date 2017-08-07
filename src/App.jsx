import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/header/Header";
import Task from "./components/task/Task";

import tasks from "./tasks";

function App(props) {
    return (
        <main>
            <Header title={props.title}/>
            <section className="todo-list">
                {props.tasks.map((todo) => <Task key={todo.id} title={todo.title} completed={todo.completed}/>)}
            </section>
        </main>
    );
}

App.propTypes = {
    title: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.shape(
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

ReactDOM.render(<App tasks={tasks}/>, document.getElementById('app'));
