import { ADD_TASK, MARK_COMPLETED, MARK_INCOMPLETE, REMOVE_TASK, TOGGLE_TASK } from "./actionTypes";

export const addTask = (text)=> ({
    type: ADD_TASK,
    payload: {text}
});

export const toggleTask = (id) => ({
    type: TOGGLE_TASK,
    payload: {id}
});

export const removeTask = (id) => ({
    type: REMOVE_TASK,
    payload: {id}
});

export const markCompleted = (id) => ({
    type: MARK_COMPLETED,
    payload: {id}
});


export const markIncomplete = (id) => ({
    type: MARK_INCOMPLETE,
    payload: {id}
});











