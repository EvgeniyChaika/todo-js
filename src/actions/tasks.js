import axios from 'axios';

export const REQUEST_TASKS = 'REQUEST_TASKS';
export const GET_TASKS = 'GET_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const EDIT_TASK = 'EDIT_TASK';

let nextId = 4;

export function requestTasks() {
    return {
        type: REQUEST_TASKS
    }
}

export function getTasks() {
    return axios.get('/api/tasks')
        .then(res => res.data)
        .then(tasks => ({
            type: GET_TASKS,
            tasks
        }));
}

export function addTask(title) {
    return {
        type: ADD_TASK,
        id: nextId++,
        title
    }
}

export function deleteTask(id) {
    return {
        type: DELETE_TASK,
        id
    }
}

export function toggleTask(id) {
    return {
        type: TOGGLE_TASK,
        id
    }
}

export function editTask(id, title) {
    return {
        type: EDIT_TASK,
        id,
        title
    }
}