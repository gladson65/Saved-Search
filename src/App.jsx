import { useState } from 'react'
import './App.css'

function App() {
  
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");


  function searchFunc() {
    
    if (!(query && query.trim().length > 0)) {
      setMessage("Aise nhi hoga. Kuch na kuch type karo.");
      return;
    }

    let trimQuery = query.trim();
    let localData = JSON.parse(localStorage.getItem("searchQuery")) || [];

    // check if query already exists
    if (localData.includes(trimQuery)) {
      setMessage("pehle se he hein ye query");
      return;
    }

    // add new query and update storage
    localData.push(trimQuery);
    localStorage.setItem("searchQuery", JSON.stringify(localData));

    setMessage("Search query saved successfully!");

  }

  return (
    <>
      <header className='w-full h-32 bg-orange-100'>
        <div className='search-container w-full h-full bg-sky-50 rounded-xl flex flex-row justify-center gap-4'>
          <input type='text' placeholder='Let search....'
            className='border-4 border-indigo-600 rounded-xl w-md'
            onChange={(e)=> setQuery(e.target.value)}  
          />
          
          {/* search button */}
          <button className='border-2 border-dashed border-green-600 rounded-xl w-24 hover:cursor-pointer'
            onClick={searchFunc}
          >
            Search
          </button>
        </div>
      </header>
    </>
  )
}

export default App
