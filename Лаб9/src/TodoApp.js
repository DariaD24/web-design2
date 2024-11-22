import React, { useState } from "react";
import TodoList from "./TodoList"; // Импортируем компонент TodoList

function TodoApp() {
    const [tasks, setTasks] = useState([]); // Состояние для списка задач
    const [taskInput, setTaskInput] = useState(""); // Состояние для ввода новой задачи

    // Функция для добавления задачи
    const addTask = (e) => {
        e.preventDefault();
        if (taskInput.trim() === "") return; // Не добавлять пустую задачу
        setTasks([...tasks, taskInput]); // Добавляем задачу в список
        setTaskInput(""); // Очищаем поле ввода
    };

    return (
        <div>
            <h1>Список задач</h1>
            <form onSubmit={addTask}>
                <input
                    type="text"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    placeholder="Добавьте новую задачу"
                />
                <button type="submit">Добавить</button>
            </form>
            <TodoList tasks={tasks} /> {/* Отображаем список задач */}
        </div>
    );
}

export default TodoApp;
