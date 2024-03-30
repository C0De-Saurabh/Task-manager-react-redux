import React from 'react'
import { CheckSquare, Square, ToggleLeft, ToggleRight, Trash} from 'react-feather'
import { useDispatch } from 'react-redux'
import { markCompleted, markIncomplete, removeTask, toggleTask } from '../redux/actions';
import "./TaskItem.css";

const TaskItem = ({ task, index }) => {
    const dispatch = useDispatch();
    return (
      <li className="task-card">
      <div className="task-content">
        <span className="task-number">{index + 1}.</span>
        <span className={`task-text ${task.completed ? 'completed' : ''}`}> {/* Strikethrough span */}
          {task.text}
        </span>
      </div>
      <div className="task-actions">
        <button className="task-toggle" onClick={() => dispatch(toggleTask(index))}>
          <p> 
            {task.completed ? <ToggleLeft /> : <ToggleRight />}
          </p>
        </button>
        <button className="task-delete" onClick={() => dispatch(removeTask(index))}>
          <Trash />
        </button>
        {(!task.completed)?(
          <button className="task-complete" onClick={() => dispatch(markCompleted(index))}>
            <Square />
          </button>):    
        (
          <button className="task-incomplete" onClick={() => dispatch(markIncomplete(index))}>
            <CheckSquare/>
          </button>
        )}
      </div>
    </li>
  );
};

export default TaskItem;