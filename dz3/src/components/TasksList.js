import React, { useState } from 'react'
import { useTaskStore } from '../zustand/indexZustand'

const TasksList = () => {

    const [filter, setFilter] = useState('all')
    const { tasks, deleteTask, updateTask, toggleTask } = useTaskStore()

    const filterTasks = tasks.filter((task) => {
        if(filter === 'completed') return task.completed
        if(filter === 'active') return !task.completed
        return true;
    })

    return (
        <>
            <label>
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value='all'>Все</option>
                    <option value='active'>Активные</option>
                    <option value='completed'>Выполненные</option>
                </select>
            </label>
            
            <ul>
                {filterTasks.map((task) => (
                    <li key={task.id}>
                        <input
                            type='checkbox'
                            checked={task.completed}
                            onChange={() => toggleTask(task.id)}
                        />
                        {task.title}
                        <div>
                            <button 
                                className='update-button'
                                onClick={() => updateTask(task.id, prompt(`Редактирование задачи: "${task.title}"`, task.title))}
                            >
                                Изменить
                            </button>
                            <button 
                                className='delete-button'
                                onClick={() => deleteTask(task.id)}
                            >
                                Удалить
                            </button>
                        </div>
                    </li>
                ))
                }
            </ul>
        </>
    )
}

export default TasksList






// const filterTasks = tasks.filter((task) => {
    //     if(filter === 'completed') return task.completed;
    //     if(filter === 'active') return !task.completed;
    //     return true;
    // })