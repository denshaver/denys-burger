import React from 'react'
// import { useTranslation } from 'react-i18next';
// import { categories } from "../../data/categories";
// import Logo from "../Header/Logos"
import { useDispatch } from "react-redux";
import "./headsStyling.css";
import { categories } from '../../data/categories';

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

export default Head