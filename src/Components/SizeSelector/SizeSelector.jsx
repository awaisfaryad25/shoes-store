import React, { useState } from "react";

const SizeSelector = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
    <select name="select" id="">
        <option value="1">1</option>
        <option value="1">2</option>
        <option value="1">3</option>
        <option value="1">4</option>
    </select>
    </div>
    );
};

export default SizeSelector;
