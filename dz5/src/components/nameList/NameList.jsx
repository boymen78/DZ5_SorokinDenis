import React from "react";

function NameList({ names, handleUpdateName, name }) {
    return (
        <div>
            {names.length === 0 ? (
                <p>Список пуст</p>
            ) : (
                <ul>
                    {names.map((n, index) => (
                        <li key={index}>
                            {n}
                            <button
                                onClick={() => handleUpdateName(index)}
                                disabled={!name.trim()}
                            >
                                Поменять
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default NameList;
