import { useState } from "react";
const Input = ({tasklist, setTasklist}) => {
  const [input, setInput] = useState("");
  const handleClick=(e)=>{
   e.preventDefault();
   setTasklist([...tasklist, input]);
   setInput("");
  }
  return (
    <>
      <form className="flex flex-row items-center gap-3">
        <input
          className="border rounded-lg px-2.5 py-1.5"
          value={input}
          type="text"
          placeholder="Add a task"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="rounded-lg font-semibold bg-violet-400 text-white px-3 py-1.5 hover:opacity-70" onClick={handleClick}>Add</button>
      </form>
    </>
  );
};
export default Input;
