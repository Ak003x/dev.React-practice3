import "../index.css"


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
  return <h1>Far Away </h1>
}
function Form() {
  return <div className="add-form" >
    <h3>What do you need for your 😍 trip?

    </h3>
    <select>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>


    </select>
    <input type="text" placeholder="Items..."/>
    <button>Add</button>
  </div>
}
function PackingList() {
  return (
    <div className="list">

      <ul >
        {initialItems.map(items => <Item items={items} />)}
      </ul>
    </div>
  )
}

function Item({ items }) {
  return (
    <li>
      <span style={items.packed ? { textDecoration: "line-through" } : {}}>

        <li>{items.quantity} {items.description}</li>
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