import React, {useState} from 'react';
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';
import Item from './model/item';
import { v4 as getId} from "uuid";
import './App.css';

const num: number = 123;

console.log("num ::: " + num);
console.log("HELLO FROM TYPESCRIPT!!!");


function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string, quantity: number): void => {
    console.log("addItem ::: product ::: " + product);
    console.log("addItem ::: quantity ::: " + quantity);
    setItems([...items, {id: getId(), product, quantity}])
  }

  // const items = [
  //   {id: 1, product: "Lemon", quantity: 3},
  //   {id: 2, product: "Chicken", quantity: 2},
  // ];

  return (
    <div>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
