import axios from 'axios';

export const REQUEST_TASKS = 'REQUEST_TASKS';
export const GET_TASKS = 'GET_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const EDIT_TASK = 'EDIT_TASK';

export function getTasks() {
    return dispatch => {
        dispatch({
            type: REQUEST_TASKS
        });
        return axios.get('/api/tasks')
            .then(res => res.data)
            .then(tasks => dispatch({
                type: GET_TASKS,
                tasks
            }))
            .catch("Error during getting all tasks process");
    }
}

export function addTask(title) {
    return axios.post('/api/tasks', {title})
        .then(response => response.data)
        .then(task => ({
            type: ADD_TASK,
            task
        }))
        .catch("Error during adding a new task process with title - ", title);
}

export function deleteTask(id) {
    return axios.delete(`/api/tasks/${id}`)
        .then(() => ({
            type: DELETE_TASK,
            id
        }))
        .catch("Error during deleting task process - ", id);
}

export function toggleTask(id) {
    return axios.patch(`/api/tasks/${id}`)
        .then(response => response.data)
        .then(task => ({
            type: TOGGLE_TASK,
            task
        }))
        .catch("Error during changing task status process with id - ", id);
}

export function editTask(id, title) {
    return axios.put(`/api/tasks/${id}`, {title})
        .then(response => response.data)
        .then(task => ({
            type: EDIT_TASK,
            task
        }))
        .catch("Error during editing task process with id - ", id);
}
