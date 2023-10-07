import { useEffect, useState } from "react";
import { Cart } from "./components/Cart/Cart";
import { ModalWindow } from "./components/ModalWindow/ModalWindow";
import { useSelector } from "react-redux";
import { CategoriesMenu } from "./components/NavMenu/CategoriesMenu";
import { Footers } from "./components/Footers/Footers";
import { Products } from "./components/Products/Products";
import Header from "./components/Header/Header";
// import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import { LngChoice } from "./components/LngChoice/LngChoice";

function App() {
  const { t } = useTranslation();
  const [category, setCategory] = useState("sku_id_1");
  const isOpen = useSelector((state) => state.modal.isOpen);
  const [language, setLanguage] = useState(true);

  const choiceLanguage = () => {
    setLanguage((prev) => !prev);
  };
  console.log(language);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isOpen && <ModalWindow t={t} />}
      <div className="container">
        <header>
          <Header t={t} />
          <CategoriesMenu category={category} setCategory={setCategory} />
        </header>
        <main>
          <Cart t={t} />
          <Products category={category} t={t} />
        </main>
        <Footers t={t} />
      </div>
    </Suspense>
  );
}

export default App;
