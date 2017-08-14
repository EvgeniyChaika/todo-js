import React, {PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Header from './components/header/Header';
import Form from './components/form/Form';
import List from './components/list/List';

export default function App({store, title}) {
    return (
        <main>
            <Header title={title} store={store}/>
            <ReactCSSTransitionGroup component="section"
                                     className="todo-list"
                                     transitionName="slide"
                                     transitionAppear={true}
                                     transitionAppearTimeout={500}
                                     transitionEnterTimeout={500}
                                     transitionLeaveTimeout={500}>
                <List store={store}/>
            </ReactCSSTransitionGroup>
            <Form store={store}/>
        </main>
    );
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