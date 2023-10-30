import './App.css'
import React, { useState } from 'react';

const sampleGoals = [
  "Faire les courses",
  "Aller à la salle de sport 3 fois par semaine",
  "Monter à plus de 5000m d'altitude",
  "Acheter mon premier appartement",
  "Perdre 5 kgs",
  "Gagner en productivité",
  "Apprendre un nouveau langage",
  "Faire une mission en freelance",
  "Organiser un meetup autour de la tech",
  "Faire un triathlon",
];

function addGoal(goal) {
  if (goal !== '') {
    sampleGoals = [...sampleGoals, goal];
  }
}

function App() {
  const [inputValue, setInputValue] = useState();
  const [goals, setGoals] = useState(sampleGoals);

  const handleGoals = () => {
    setGoals([...goals, inputValue]);
    setInputValue('');
  };

  

  return (
    <>
      <div>
        <ul>
          {goals.map((goal, index) => 
            <li key={index} className="">
                {goal}
            </li>
          )}
        </ul>
      </div>

      <input 
        type="text"
        placeholder="Ajouter un nouveau but"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      
      <button onClick={handleGoals}>Ajouter</button>
    </>
  )
}

export default App