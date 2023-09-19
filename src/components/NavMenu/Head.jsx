import React from 'react'
import { categories } from "../../data/categories";
import Logo from "../Header/Logos"
import { useDispatch, useSelector } from "react-redux";
import "./headsStyling.css";

export const Head = ({category, setCategory}) => {
 
  const handleCategory = (category) => setCategory(category);
  const dispatch = useDispatch();
  
  return (
   <>
   
    {categories.map((cat) => {
      return (
        <button
          onClick={() => handleCategory(cat.id)}
          className={cat.id === category ? "choosen" : ""}
          key={cat.id}
        >
          <img src={cat.img} alt="" style={{marginRight: '10px'}}/>
          {cat.title}
        </button>
      );
    })}
   </>
  )
}
