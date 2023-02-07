// bishal
import { React, useState } from "react";
import "./App.css";
import ToDoList from "./ToDoList";

export default function App() {
  const [items, setItems] = useState("");
  const [itemsArr, setItemsArr] = useState([]);

  const itemEvent = (event) => {
    setItems(event.target.value);
  };

  const addEvent = () => {
    setItemsArr((oldItems) => {
      return [...oldItems, items];
    });
    setItems("");
  };

  const deleteItem = (id) => {
    console.log(id);
    // setItemsArr((oldItems) => {
    //   return oldItems.filter((arrElement, index) => {
    //     return index !== id;
    //   });
    // });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>ToDo List</h1>
          <input
            type="text"
            placeholder="Add item"
            value={items}
            onChange={itemEvent}
          />
          <button className="addBtn" onClick={addEvent}>
            +
          </button>

          <ol>
            {itemsArr.map((item, index) => {
              return (
                <ToDoList
                  item={item}
                  key={index}
                  id={index}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
