import React, {useState} from 'react';
import './App.css'

function App() {
  const [name, setName] = useState('Sofia');
  const [newName, setnewName] = useState ('');
  const changeName = (event) => {
    event.preventDefault();
    if(newName.trim()){
        setName(newName);
        setnewName('');
    }
  };

return (
    <div>
        <h2>Teacher Name :{name}</h2> 
        <ul>
            <li onClick={() => setName("Data")}>Data</li>
            <li onClick={() => setName("Reyes")}>Reyes</li>
            <li onClick={() => setName("Yolanda")}>Yolanda</li>
        </ul>
        <form onSubmit={changeName}>
            <input 
            type='text'
            value={newName} 
            onChange={(e)=>setnewName(e.target.value)}
            placeholder='add a name'/>
            <button type='submit'>Add</button>
        </form>

    </div>
)

}



export default App;
