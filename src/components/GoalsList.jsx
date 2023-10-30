import React, { useState } from 'react';
import ListItem from './ListItem';
import Modal from './Modal';


export default function GoalsList({list}) {
  const [inputValue, setInputValue] = useState('');
  const [goals, setGoals] = useState(list);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState()

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
      <div className="container flex flex-col p-8 bg-gray-200 rounded-md bg-opacity-80 from-transparent backdrop-blur-sm md:w-1/2 sm:w-3/4">
        <ul>
          {goals.map((goal) => 
            <ListItem key={goal.id} item={goal} modal={handleModal}/>
          )}
        </ul>
        
        <div>
          <input 
            type="text"
            placeholder="Ajouter un nouveau but"
            value={inputValue}
            onChange={handleInputGoal}
          />
          
          <button onClick={handleAddGoal}>Ajouter</button>
        </div>
      </div>
      {isModalOpen && <Modal isOpen={setIsModalOpen} deleteItem={handleRemoveGoal}/>} 
    </>
  )
}