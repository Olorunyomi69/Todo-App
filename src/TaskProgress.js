import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const TaskProgress = ({ totalTasks, completedTasks }) => {
    
    // const percentage = totalTasks > 0 ? (completedTasks / totalTasks).toFixed(2) * 100 : 0;
    const percentage = 75;
  return (
    <div className="progress-wrapper">
      <div className="progress-container">
        <div className="left">
          <span className="primaryText">Your Task Progress</span>
          <span>Eat that frog!</span>
        </div>

        <div className="progress-bar">
         
         <CircularProgressbar value={percentage} text={`${percentage}%`}  />

        </div>
      </div>
    </div>
  );
};

export default TaskProgress;
