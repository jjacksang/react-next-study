import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import { useRef } from "react";

const mockData = [
    {
        id: 0,
        isDone: false,
        content: "빨래를 해야겠어요",
        createdDate: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "공부를 해야겠어요",
        createdDate: new Date().getTime(),
    },
    {
        id: 2,
        isDone: true,
        content: "노래를 해야겠어요",
        createdDate: new Date().getTime(),
    },
];

function App() {
    const [todos, setTodos] = useState(mockData);
    const idRef = useRef(3);

    const onCreate = (content) => {
        const newTodo = {
            id: idRef.current++,
            isDone: false,
            content,
            createdDate: new Date().getTime(),
        };

        setTodos([...todos, newTodo]);
    };

    const onUpdate = (targetId) => {
        setTodos(
            todos.map((todo) =>
                todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    const onDelete = (targetId) => {
        setTodos(todos.filter((todo) => todo.id !== targetId));
    };

    return (
        <div className="App">
            <Header />
            <TodoEditor onCreate={onCreate} />
            <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    );
}

export default App;
