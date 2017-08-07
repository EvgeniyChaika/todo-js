import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/header/Header";
import Task from "./components/task/Task";

function App(props) {
    return (
        <main>
            <Header title={props.title}/>
            <section className="todo-list">
                <Task title={"Study JavaScript"} completed={true}/>
                <Task title={"Study React"} completed={false}/>
            </section>
        </main>
    );
}

App.propTypes = {
    title: PropTypes.string
};

App.defaultProps = {
    title: "React ToDo"
};

ReactDOM.render(<App/>, document.getElementById('app'));
