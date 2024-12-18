
import React, { useState } from "react";
import NameInput from "../../components/nameInput/NameInput";
import NameList from "../../components/nameList/NameList";

function NamePage() {
    const [name, setName] = useState("");
    const [names, setNames] = useState([]);

    const handleAddName = () => {
        if (name.trim()) {
            setNames([...names, name]);
            setName("");
        }
    };

    const handleUpdateName = (index) => {
        if (name.trim()) {
            const updatedNames = names.map((n, i) => (i === index ? name : n));
            setNames(updatedNames);
            setName("");
        }
    };

    return (
        <div>
            <NameInput name={name} setName={setName} handleAddName={handleAddName} />
            <NameList names={names} handleUpdateName={handleUpdateName} name={name} />
        </div>
    );
}

export default NamePage;
