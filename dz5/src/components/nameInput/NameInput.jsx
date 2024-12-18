import React from "react";

function NameInput({ name, setName, handleAddName }) {
    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Введите имя"
            />
            <button onClick={handleAddName} disabled={!name.trim()}>
                Добавить
            </button>
        </div>
    );
}

export default NameInput;
