import React, { useState } from 'react';
import ListItem from './ListItem';
import Modal from './Modal';

export default function GoalsList({list}) {
  const [inputValue, setInputValue] = useState('');
  const [goals, setGoals] = useState(list);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState();

  const handleInputGoal = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddGoal = () => {
    if (inputValue !== '') {
      const lastId = goals[goals.length-1].id;
      const newGoal = {id: lastId + 1, text: inputValue};

      setGoals([...goals, newGoal]);
      setInputValue('');
    }
  };

  const handleModal = (id) => {
    setSelectedId(id);
    setIsModalOpen(true);
  }

  const handleEdit = (id, text) => {
    const editedGoals = goals.map(goal =>
      goal.id === id ? {id: id, text: text} : goal
    );
    console.log(editedGoals)
    setGoals(editedGoals);
  }

  const handleRemoveGoal = () => {
    setGoals(
      goals.filter(goal =>
        goal.id !== selectedId
      )
    );
    setIsModalOpen(false);
  }

  return (
    <>
      <div className="container flex flex-col p-8 bg-gray-200 rounded-md bg-opacity-80 from-transparent backdrop-blur-sm lg:w-3/4 xl:w-1/2 ">
        <ul className="overflow-y-scroll">
          {goals.map((goal) => 
            <ListItem key={goal.id} item={goal} modal={handleModal} onUpdate={handleEdit} />
          )}
        </ul>
        
        <div className="flex w-full p-8 bg-white">
          <input 
            type="text"
            placeholder="Ajouter un nouveau but"
            value={inputValue}
            onChange={handleInputGoal}
            className="w-3/4 p-2 border border-black"
          />
          
          <button 
            onClick={handleAddGoal}
            className="p-2 px-8 mx-auto bg-green-500 rounded-md hover:bg-green-400"
          >
            Ajouter
          </button>
        </div>
      </div>
      {isModalOpen && <Modal isOpen={setIsModalOpen} deleteItem={handleRemoveGoal}/>} 
    </>
  )
}