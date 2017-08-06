import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <main>
            <header>
                <h1>React ToDo</h1>
            </header>
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

ReactDOM.render(<App/>, document.getElementById('app'));
