import React from 'react'
import { categories } from "../data/categories";
import Logo from "./Logos"
import { useDispatch, useSelector } from "react-redux";

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
