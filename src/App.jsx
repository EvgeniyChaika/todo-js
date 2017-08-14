import React, {PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Header from './components/header/Header';
import Form from './components/form/Form';
import {addTask} from './actions/index';
import List from './components/list/List';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.store = this.props.store;

        this.handleAdd = this.handleAdd.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    componentDidMount() {
        this.unsubscribe = this.store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleAdd(title) {
        this.store.dispatch(addTask(title));
    }

    handleError(error) {
        console.error(error);
    }

    render() {
        const tasks = this.store.getState();
        return (
            <main>
                <Header title={this.props.title} tasks={tasks}/>
                <ReactCSSTransitionGroup component="section"
                                         className="todo-list"
                                         transitionName="slide"
                                         transitionAppear={true}
                                         transitionAppearTimeout={500}
                                         transitionEnterTimeout={500}
                                         transitionLeaveTimeout={500}>
                    <List store={this.store}/>
                </ReactCSSTransitionGroup>
                <Form onAdd={this.handleAdd}/>
            </main>
        );
    }
}

App.propTypes = {
    title: PropTypes.string,
    store: PropTypes.object.isRequired
};

App.defaultProps = {
    title: "React ToDo"
};


// componentDidMount() {
//     axios.get('/api/tasks')
//         .then(res => res.data)
//         .then(tasks => this.setState({tasks}))
//         .catch(this.handleError)
// }
// handleToggle(id) {
//     axios.patch(`/api/tasks/${id}`)
//         .then(response => {
//             const tasks = this.state.tasks.map(task => {
//                 if (task.id === id) {
//                     task = response.data;
//                 }
//                 return task;
//             });
//             this.setState({tasks});
//         })
//         .catch(this.handleError)
// }
//
// handleDelete(id) {
//     axios.delete(`/api/tasks/${id}`)
//         .then(() => {
//             const index = this.state.tasks.findIndex(task => task.id === id);
//             let tasks = [...this.state.tasks.slice(0, index), ...this.state.tasks.slice(index + 1)];
//             this.setState({tasks});
//         })
//         .catch(this.handleError);
// }
//
// handleAdd(title) {
//     axios.post('/api/tasks', {title})
//         .then(response => response.data)
//         .then(task => {
//             let tasks = [...this.state.tasks, task];
//             this.setState({tasks});
//         })
//         .catch(this.handleError);
// }
//
// handleEdit(id, title) {
//     axios.put(`/api/tasks/${id}`, {title})
//         .then(response => {
//             const tasks = this.state.tasks.map(task => {
//                 if (task.id === id) {
//                     task = response.data;
//                 }
//                 return task;
//             });
//             this.setState({tasks});
//         })
//         .catch(this.handleError);
// }
//
// handleError(error) {
//     console.error(error);
// }