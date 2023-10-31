import { useState } from "react";
import { CarbonCloseOutline } from "./icons/CarbonCloseOutline";

export default function ListItem({item, modal, onUpdate}) {
  const [isEditInput, setIsEditInput] = useState(false);
  const [textValue, setTextValue] = useState(item.text)
  const [inputValue, setInputValue] = useState('');

  const handleEditInputToggle = () => {
    setIsEditInput(!isEditInput);
  }

  const handleInputGoal = (e) => {
    setInputValue(e.target.value);
  };

  const handleBlur = () => {
    if (inputValue.trim()) {
      onUpdate(item.id, inputValue);
      setTextValue(inputValue);
      handleEditInputToggle();
    }
  }

  return (
    <li
      onClick={handleEditInputToggle}
      className="flex items-center justify-between p-4 m-2 text-lg text-white bg-teal-700 rounded-md hover:bg-teal-800"
    >
      {isEditInput ? 
        <input 
          className="text-black"
          type="text"
          value={inputValue}
          onChange={handleInputGoal}
          onBlur={handleBlur}
          autoFocus
        />
        
        : textValue
      }
      <CarbonCloseOutline onClick={()=>modal(item.id)} className="text-2xl hover:text-red-400" />
    </li>
  )
}