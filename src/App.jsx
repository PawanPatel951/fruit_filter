import { memo, useMemo, useState } from 'react'
import './App.css'

function App() {
   useEffect(() => {
    document.title = "Search Fruits 🍓";
  });
  const [searchTerm, setSearchTerm] = useState("");
  const items = [
  "🍎 Apple",
  "🍌 Banana",
  "🍒 Cherry",
  "🍊 Orange",
  "🍇 Grapes",
  "🥭 Mango"
];

  const handlechange = (e) => {
    setSearchTerm(e.target.value);
  }

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  } , [searchTerm]);

  return (
    <>
      <div className="App">
       <div className="content">
        <h1>Fruit List 🍎🍌🍒</h1>
        <input type="text" placeholder='Search term' value={searchTerm} onChange={handlechange}/>

        <ul>
          {
            filteredItems.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </ul>
       </div>
        </div>
    </>
  )
}

export default App
