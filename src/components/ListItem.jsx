export default function ListItem({item, deleteItem}) {
  return (
    <li className="flex justify-between p-2 m-2 rounded-md text-sky-11 bg-slate-400 hover:bg-slate-300">
      {item.text}
      <button onClick={()=>deleteItem(item.id)}>Supprimer</button>
    </li>
  )
}