"use client"
import "../index.css"
import { useState } from "react"




export default function App() {
  const [item, setItems] = useState([])
  function handleAddleItems(item) {
    setItems((items) => [...items, item])
  }
  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddleItems} />
      <PackingList items={item} />
      <Stats />
    </div>
  )
}


function Logo() {
  return (<h1>Far Away </h1>)
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)
 


  function handleAddleItems(item) {
    setItems((items) => [...items, item])
  }


function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = { description, quantity, package: false, id: Date.now() }
    console.log(newItem);

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
function PackingList({ items }) {
  return (
    <div className="list">

      <ul >
        {items.map(items => <Item items={items} key={items.id} />)}
      </ul>
    </div>
  )
}

function Item({ items }) {
  return (
    <li>
      <span style={items.packed ? { textDecoration: "line-through" } : {}}>

        {items.quantity} {items.description}
      </span>
      <button>❌</button>
    </li>
  )
}


function Stats() {

  return <footer className="stats" >
    <em>
      You have X items on your list, and you already packed X (X%)

    </em></footer>
}