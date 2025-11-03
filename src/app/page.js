"use client"
import "../index.css"
import { useState } from "react"




export default function App() {
  const [item, setItems] = useState([])

  function handleAddleItems(item) {
    setItems((items) => [...items, item])
  }



  function handleDeletedItems(id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function handleUpdatedItems(id) {
    setItems((items) => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddleItems} />
      <PackingList items={item} DeletedItems={handleDeletedItems} UpdatedItems={handleUpdatedItems} />
      <Stats items={item} />
    </div>
  )
}


function Logo() {
  return (<h1>Far Away </h1>)
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)





  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() }

    onAddItems(newItem)
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit} >
      <h3>What do you need for your 😍 trip?

      </h3>
      <select value={quantity}
        onChange={(q) => {
          setQuantity(Number(q.target.value))
        }}>

        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (<option value={num} key={num}>{num}</option>))}


      </select>
      <input type="text" placeholder="Items..." value={description}

        onChange={(e) => {
          setDescription(e.target.value)
        }} />
      <button>Add</button>
    </form>
  )
}
function PackingList({ items, DeletedItems, UpdatedItems }) {
  return (
    <div className="list">

      <ul >
        {items.map(items => <Item items={items} key={items.id} DeletedItems={DeletedItems} UpdatedItems={UpdatedItems} />)}
      </ul>
      <div className="action">
        <select>
          <option value="">Sort by input Order </option>
          <option value="">Sort by description</option>
          <option value="">Sort by packed status</option>
        </select>
      </div>



    </div>
  )
}

function Item({ items, DeletedItems, UpdatedItems }) {
  return (
    <li>
      <input type="checkbox" value={items.packed} onChange={() => UpdatedItems(items.id)} />
      <span style={items.packed ? { textDecoration: "line-through" } : {}}>

        {items.quantity} {items.description}
      </span>
      <button onClick={() => DeletedItems(items.id)}>❌</button>
    </li>
  )
}


function Stats({ items }) {

  if (!items.length) {
    return (<p className="stats">
      <em>
        Starting adding items in the Far Away list
      </em>
    </p>);
  }




  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);


  return <footer className="stats" >
    <em>
      {percentage === 100 ? "You got everything ready to GO! "
        : `You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage})`
      }
    </em>
  </footer>
}