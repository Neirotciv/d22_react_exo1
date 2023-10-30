export default function ListItem({item, modal}) {
  return (
    <li className="flex justify-between p-4 m-2 text-lg text-white bg-teal-700 rounded-md hover:bg-teal-800">
      {item.text}
      <button onClick={()=>modal(item.id)}>Supprimer</button>
    </li>
  )
}