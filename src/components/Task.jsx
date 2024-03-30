import React, { useState } from 'react'
import { Plus } from 'react-feather'
import { useDispatch} from 'react-redux';
import { addTask} from '../redux/actions';
import TaskList from './TaskList';
import "./Task.css";


const Task = () => {

    const dispatch = useDispatch();
    const [newTaskText, setNewTaskText] = useState('');
    const handleAddTask = (text) => {
      dispatch(addTask(text));
    };
  
    const handleAddTaskClick = () => {
      if (newTaskText.trim() !== '') {
        handleAddTask(newTaskText.trim());
        setNewTaskText('');
      }
    };
  
  
    return (
      <div className="task-app"> {/* Main container */}
      <h2 className="task-title">TASK APP</h2> {/* Title */}
      <div className="add-task"> {/* Input and button container */}
        <input
          id="addTaskInput"
          type="text"
          className="task-input"
          placeholder="Add Task"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <button className="add-button" onClick={handleAddTaskClick}>
          <Plus size={20} />
        </button>
      </div>
      <TaskList />
    </div>
  );
};

export default Task;