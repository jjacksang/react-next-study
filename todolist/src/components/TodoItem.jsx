import "./TodoItem.css";

export default function TodoItem({
    id,
    isDone,
    content,
    createdDate,
    onUpdate,
    onDelete,
}) {
    const onChangeCheckbox = () => {
        onUpdate(id);
    };

    const onClickDeleteBtn = () => {
        onDelete(id);
    };

    return (
        <div className="TodoItem">
            <input
                type="checkbox"
                checked={isDone}
                onChange={onChangeCheckbox}
            />
            <div className="content">{content}</div>
            <div className="date">
                {new Date(createdDate).toLocaleDateString()}
            </div>
            <button onClick={onClickDeleteBtn}>삭제</button>
        </div>
    );
}
