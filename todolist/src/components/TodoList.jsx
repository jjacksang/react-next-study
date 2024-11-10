import { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

export default function TodoList({ todos, onUpdate }) {
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const filterTodos = () => {
        if (search === "") {
            return todos;
        }

        return todos.filter((todo) =>
            todo.content.toLowerCase().includes(search.toLowerCase())
        );
    };

    return (
        <div className="TodoList">
            <h4>Todos</h4>
            <input
                placeholder="검색어를 입력하세요"
                value={search}
                onChange={onChangeSearch}
            />
            <div className="todos_wrapper">
                {filterTodos().map((todo) => (
                    <TodoItem {...todo} key={todo.id} onUpdate={onUpdate} />
                ))}
            </div>
        </div>
    );
}
