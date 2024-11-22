import React from "react";

function TodoList({ tasks }) {
    return (
        <div>
            <ul>
                {tasks.length === 0 ? (
                    <li>Задач нет</li> // Если задач нет, отображаем сообщение
                ) : (
                    tasks.map((task, index) => (
                        <li key={index}>{task}</li> // Отображаем каждую задачу
                    ))
                )}
            </ul>
        </div>
    );
}

export default TodoList;
