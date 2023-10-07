import React from "react";
// import { useTranslation } from 'react-i18next';
// import { categories } from "../../data/categories";
// import Header from "../Header/Header"
import { useDispatch } from "react-redux";
import "./headsStyling.css";
import { categories } from "../../data/categories";

export const CategoriesMenu = ({ category, setCategory }) => {
  // const { t } = useTranslation();
  // const categories = [
  //   {
  //     title: t('cat.Burger'),
  //     id: t('cat.Burger'),
  //     img:"./img/pic/1.svg"
  //   },

  //   {
  //     title: t('cat.Snacks') ,
  //     id: t('cat.Snacks'),
  //     img:"./img/pic/2.svg"
  //   },
  //   {
  //     title: t('cat.Hot-Dogs') ,
  //     id: t('cat.Hot-Dogs'),
  //     img:"./img/pic/3.svg"
  //   },
  //   {
  //     title: t('cat.Kombo') ,
  //     id: t('cat.Kombo'),
  //     img:"./img/pic/4.svg"
  //   },
  //   {
  //     title: t('cat.Shawarma') ,
  //     id: t('cat.Shawarma'),
  //     img:"./img/pic/5.svg"
  //   },
  //   {
  //     title:t('cat.Pizza')  ,
  //     id: t('cat.Pizza') ,
  //     img:"./img/pic/6.svg"
  //   },
  //   {
  //     title:t('cat.Wok')  ,
  //     id: t('cat.Wok'),
  //     img:"./img/pic/7.svg"
  //   },
  //   {
  //     title:t('cat.Desserts') ,
  //     id: t('cat.Desserts'),
  //     img:"./img/pic/8.svg"
  //   },
  //   {
  //     title:t('cat.Sauces') ,
  //     id: t('cat.Sauces'),
  //     img:"./img/pic/9.svg"
  //   },
  // ];

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
            <img src={cat.img} alt="" style={{ marginRight: "10px" }} />
            {cat.title}
          </button>
        );
      })}
    </>
  );
};
