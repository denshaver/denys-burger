import { useState } from "react";
import { Cart } from "./components/Cart/Cart";
import { ModalWindow } from "./components/ModalWindow/ModalWindow";
import { useSelector } from "react-redux";
import { Head } from "./components/NavMenu/Head";
import { Footers } from "./components/Footers/Footers";
import { Products } from "./components/Products/Products";
import Logo from "./components/Header/Logos";

// import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

function App() {
  const { t, i18n } = useTranslation();
  const [category, setCategory] = useState("sku_id_1");
  const isOpen = useSelector((state) => state.modal.isOpen);


  const changeLanguage = () => {
    if (i18n.language === "en") {
      i18next.changeLanguage("ua");
    } else {
      i18next.changeLanguage("en");
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isOpen && <ModalWindow t={t} />}
      <div className="container">
        <header>
          <Logo t={t} />
          <Head category={category} setCategory={setCategory} />
        </header>
        <main>
          <Cart />
          <Products category={category} t={t} />
        </main>
        <Footers t={t} />
      </div>
    </Suspense>
  );
}

export default App;
