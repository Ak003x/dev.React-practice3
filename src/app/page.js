"use client"
import "../index.css"
import { useState } from "react"



const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Phone", quantity: 12, packed: true },
];

export default function App() {


  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  )
}


function Logo() {
  return (<h1>Far Away </h1>)
}

function Form() {

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit} >
      <h3>What do you need for your 😍 trip?

      </h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (<option value={num} key={num}>{num}</option>))}


      </select>
      <input type="text" placeholder="Items..." />
      <button>Add</button>
    </form>
  )
}
function PackingList() {
  return (
    <div className="list">

      <ul >
        {initialItems.map(items => <Item items={items} key={items.id} />)}
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