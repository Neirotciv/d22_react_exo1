export default function Modal({isOpen, deleteItem}) {
  return (
    <div className="absolute top-0 flex items-center justify-center w-full h-full backdrop-blur-md">
      <div className="flex flex-col items-center justify-center w-full mx-4 bg-white rounded-md shadow-md lg:w-1/4 h-1/4">
        <p>Confirmer la suppression</p>
        <div className="m-4">
          <button onClick={()=>isOpen(false)} className="mr-12">Non</button>
          <button onClick={()=>deleteItem()}>Oui</button>
        </div>
      </div>
    </div>
  )
}