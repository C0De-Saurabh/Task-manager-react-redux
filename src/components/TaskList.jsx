import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem';
import "./TaskList.css";

const TaskList = () => {

  const FinalTasks = useSelector((state) => state.tasks);

    return (
      <div className="task-list"> 
      <h2 className="task-list-title">ALL THE TASKS:</h2> 
      <ul className="task-items"> 
        {FinalTasks.map((task, index) => (
          <TaskItem key={index} task={task} index={index} />
        ))}
      </ul>
    </div>
  );
};


export default TaskList;