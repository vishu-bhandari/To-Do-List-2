import React from "react";
import "./index.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const ToDoList = () => {
  const [item, setItem] = useState("buy an apple");
  const [newitem, setNewItem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const listOfItems=()=>{
    setNewItem((prevValue)=>{
        return [...prevValue,item]
    });
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add An Item" onChange={itemEvent} />
          <Button className="new_btn " onClick={listOfItems}>
            <AddIcon />
          </Button>
          <br />
          <ol>
             {newitem.map((val) => {
              return <li>{val}</li>;
            })}
          </ol>
          <br />
        </div>
      </div>
    </>
  );
};

export default ToDoList;
