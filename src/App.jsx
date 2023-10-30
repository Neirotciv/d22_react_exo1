import './App.css'

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

function App() {
  return (
    <>
      <ul>
        {sampleGoals.map((goal, index) => 
          <li key={index}>
              {goal}
          </li>
        )}
      </ul>
    </>
  )
}

export default App