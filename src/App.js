import './App.css';
import Board from './components/Board';
import { useState } from 'react';
import Input from './components/Input';
function App() {
  const [tasklist, setTasklist]=useState([]);
  return (
    <div className='px-12'>
    <div className='flex flex-col items-center justify-center'>
    <h2 className='text-xl font-semibold'>TODO</h2>
    <Input tasklist={tasklist} setTasklist={setTasklist}/>
    </div>
    <div className="flex flex-col pt-5 gap-4 sm:grid sm:grid-cols-3 sm:px-8 md:px-10 lg:px-12">
      {tasklist.map((item,index)=>
        <Board item={item} key={index} index={index} tasklist={tasklist} setTasklist={setTasklist}/>
      )}
    </div>
    </div>
  );
}

export default App;
