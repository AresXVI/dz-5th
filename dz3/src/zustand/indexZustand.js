import { create } from 'zustand'
import { persist } from 'zustand/middleware'


export const useTaskStore = create(
    persist(
        (set) => ({
            tasks: [],
            addTask: (task) =>
                set((state) => ({
                    tasks: [ ...state.tasks, { ...task, completed: false}]
                })),
            toggleTask: (id) =>
                set((state) => ({
                    tasks: state.tasks.map((task) => 
                        task.id === id ? {...task, completed: !task.completed} : task
                    )
                })),
                updateTask: (id, newTitle) =>
                    set((state) => ({
                        tasks: state.tasks.map((task) => 
                            task.id === id ? {...task, title: newTitle} : task
                        )
                    })),
            deleteTask: (id) =>
                set((state) => ({
                    tasks: state.tasks.filter((task) => task.id !== id)
                }))
        }),
        {name: 'task-storage'}
    )
) 



















// addTask: (task) => 
//     set((state) => ({
//         tasks: [...state.tasks, {...task, completed: false}]
//     })),
// deleteTask: (id) => 
//     set((state) => ({
//         tasks: state.tasks.filter((task) => task.id !== id)
//     })),
// updateTask: (id, newTask) =>
//     set((state) => ({
//         tasks: state.tasks.map((task) => 
//             task.id === id ? {...task, title: newTask} : task
//         )
//     })),
// toggleTask: (id) => 
//     set((state) => ({
//         tasks: state.tasks.map((task) => 
//             task.id === id ? { ...task, completed: !task.completed } : task
//         )
//     }))