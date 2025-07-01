import React, { useState } from 'react'
import { useTaskStore } from '../zustand/indexZustand'



const AddTask = () => {

    const [title, setTitle] = useState('')
    const { addTask} = useTaskStore()

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title) return;
        addTask({id: Date.now(), title})
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className='task-input'
                type='text'
                placeholder='Введите задачу...'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button 
                className='add-task_button'
                type='submit'
            >
                Добавить задачу
            </button>
        </form>
    )
}

export default AddTask