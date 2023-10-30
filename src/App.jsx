import './App.css'
import React, { useState } from 'react';

const sampleGoals = [
  {id: 1, text: "Faire les courses"},
  {id: 2, text: "Aller à la salle de sport 3 fois par semaine"},
  {id: 3, text: "Monter à plus de 5000m d'altitude"},
  {id: 4, text: "Acheter mon premier appartement"},
  {id: 5, text: "Perdre 5 kgs"},
  {id: 6, text: "Gagner en productivité"},
  {id: 7, text: "Apprendre un nouveau langage"},
  {id: 8, text: "Faire une mission en freelance"},
  {id: 9, text: "Organiser un meetup autour de la tech"},
  {id: 10, text: "Faire un triathlon"},
];

function addGoal(goal) {
  if (goal !== '') {
    sampleGoals = [...sampleGoals, goal];
  }
}

function App() {
  const [inputValue, setInputValue] = useState();
  const [goals, setGoals] = useState(sampleGoals);

  const handleAddGoal = () => {
    if (inputValue !== '') {
      const lastId = goals[goals.length-1].id;
      const newGoal = {id: lastId + 1, text: inputValue};

      setGoals([...goals, newGoal]);
      setInputValue('');
    }
  };

  const handleInputGoal = (e) => {
    setInputValue(e.target.value);
  };

  const handleRemoveGoal = (e) => {
    const id = parseInt(e.target.id);
    setGoals(
      goals.filter(goal =>
        goal.id !== id
      )
    );
  }
  
  return (
    <>
      <div className="container">
        <ul>
          {goals.map((goal, index) => 
            <li key={goal.id} className=" flex justify-between">
              {goal.id}
              {goal.text}
              <button id={goal.id} onClick={handleRemoveGoal}>Supprimer</button>
            </li>
          )}
        </ul>
      </div>

      <input 
        type="text"
        placeholder="Ajouter un nouveau but"
        value={inputValue}
        onChange={handleInputGoal}
      />
      
      <button onClick={handleAddGoal}>Ajouter</button>
    </>
  )
}

export default App