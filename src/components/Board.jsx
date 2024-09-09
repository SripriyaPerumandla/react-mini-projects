const Board = ({ item, index, tasklist, setTasklist }) => {
  const handleDelete = () => {
    let removedIndex = tasklist.indexOf(item); //index of deleted item
    tasklist.splice(removedIndex, 1);
    setTasklist((currentList) =>
      currentList.filter((todo) => index === removedIndex)
    );
  };
  return (
    <>
      <div className="max-w-lg flex flex-col items-center justify-center justify-start border pt-3 pb-4 px-4 md:px-6">
        <p>{item}</p>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white rounded-lg px-2 py-1 mt-4"
        >
          Delete🗑️
        </button>
      </div>
    </>
  );
};
export default Board;
