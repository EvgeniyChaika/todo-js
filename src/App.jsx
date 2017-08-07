import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/header/Header";

function App(props) {
    return (
        <main>
            <Header title={props.title}/>
            <section className="todo-list">
                <div className="todo completed">
                    <button className="checkbox icon">
                        <i className="material-icons">check_box</i>
                    </button>
                    <span className="todo-title">Study JavaScript</span>
                    <button className="delete icon">
                        <i className="material-icons">delete</i>
                    </button>
                </div>
                <div className="todo">
                    <button className="checkbox icon">
                        <i className="material-icons">check_box_outline_blank</i>
                    </button>
                    <span className="todo-title">Study React</span>
                    <button className="delete icon">
                        <i className="material-icons">delete</i>
                    </button>
                </div>
            </section>
        </main>
    );
}

ReactDOM.render(<App title="React ToDo"/>, document.getElementById('app'));
