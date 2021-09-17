import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from '../services/fetchColorService';
import axiosWithAuth from "../helpers/axiosWithAuth";

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(()=>{
    fetchColorService(setColors);
    
  },[])

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (value) => {
    axiosWithAuth()
    .put(`/api/colors/${value.id}`, value)
    .then(res=>{
      setColors(colors.map(item=>{
        if (res.data.id === item.id){
          return res.data
        } else{
          return item
        }
      }))
      
    })
  };
  

  const deleteColor = (colorToDelete) => {
    axiosWithAuth()
    .delete(`/api/colors/${colorToDelete.id}`)
    .then(res=>{
      console.log(res)
      setColors(colors.filter(item=>{
        if (item.id !== res.data){
          return item
        }
      }))
    }).catch(err=>{
      console.log(err)
    })
  };

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions
