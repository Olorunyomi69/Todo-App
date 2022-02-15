import { useState } from 'react'
import Header from './Header';
import Tasks from './Tasks';
import AddTask from './AddTask'

function App() {
  const [ showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
       id: 1,
       text: "Doctors appointment",
       day: 'february 5th at 2:30pm',
       reminder: true
   },
   {
       id: 2,
       text: "Meeting at School",
       day: 'february 6th at 1:30pm',
       reminder: true
   },
   {
       id: 3,
       text: "Food shopping",
       day: 'february 7th at 2:30pm',
       reminder: false
   }

]) 

// TO ADD THE TASK
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}


//TO DELETE TASK 
const deleteTask = (id) => {
 setTasks(tasks.filter((task) => task.id !== id))
}

// FOR THE TOGGLE REMINDER
const toggleReminder = (id) => {
setTasks(tasks.map((task) => task.id === id
 ? { ...task, reminder: !task.reminder }: task))
}


  return (
    <div className="Container">
      <Header onAdd= {() => setShowAddTask(!showAddTask)}
      showAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 ? ( 
      <Tasks tasks= { tasks }  onDelete = { deleteTask } onToggle = {toggleReminder}/>)
       :(
         "An idle man is the devil's workshop; get something to do"
       )}
    </div>
  );
}


export default App;