import React from 'react'
import { useDispatch } from "react-redux";
import "./headsStyling.css";
import { categories } from '../../data/categories';

export const Head = ({category, setCategory}) => {
    
  const handleCategory = (category) => setCategory(category);
    
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

