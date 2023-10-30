import React, { useState } from 'react';
import ListItem from './ListItem';

export default function GoalsList({list}) {
  const [inputValue, setInputValue] = useState();
  const [goals, setGoals] = useState(list);

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

  const handleRemoveGoal = (id) => {
    setGoals(
      goals.filter(goal =>
        goal.id !== id
      )
    );
  }

  return (
    <div className="container">
      <ul>
        {goals.map((goal) => 
          <ListItem key={goal.id} item={goal} deleteItem={handleRemoveGoal}/>
        )}
      </ul>
      
      <input 
        type="text"
        placeholder="Ajouter un nouveau but"
        value={inputValue}
        onChange={handleInputGoal}
      />
      
      <button onClick={handleAddGoal}>Ajouter</button>
    </div>
  )
}