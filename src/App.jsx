import './App.css'
import React, { useState } from 'react';
import GoalsList from './components/GoalsList';

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

function App() {
  return (
    <devicePixelRatio>
      <GoalsList list={sampleGoals} />
    </devicePixelRatio>
  )
}

export default App