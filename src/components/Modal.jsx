export default function Modal({isOpen, deleteItem}) {
  return (
    <div className="absolute flex items-center justify-center w-full h-full backdrop-blur-md">
      <div className="flex flex-col items-center justify-center w-full mx-4 bg-white rounded-md shadow-md lg:w-1/4 h-1/4">
        <p>Confirmer la suppression</p>
        <div className="m-4">
          <button onClick={()=>isOpen(false)} className="p-2 px-8 mr-12 bg-red-500 rounded-md hover:bg-red-400">Non</button>
          <button onClick={()=>deleteItem()} className="p-2 px-8 mx-auto bg-green-500 rounded-md hover:bg-green-400">Oui</button>
        </div>
      </div>
    </div>
  )
}