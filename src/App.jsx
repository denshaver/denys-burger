import { useEffect, useState } from "react";
import { Cart } from "./components/Cart/Cart";
import { ModalWindow } from "./components/ModalWindow/ModalWindow";
import { useSelector } from "react-redux";
import { Head } from "./components/NavMenu/Head";
import { Footers } from "./components/Footers/Footers";
import { Products } from "./components/Products/Products";
import Logo from "./components/Header/Logos";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import { LngChoose } from "./components/LngChoose/LngChoose";

function App() {
  const { t, i18n } = useTranslation();
  const [category, setCategory] = useState("sku_id_1");
  const isOpen = useSelector((state) => state.modal.isOpen);
  const [lng, setLng] = useState(true);

  const getData = () => {
    const savedCartJSON = localStorage.getItem("cart");
    const savedOrderJSON = localStorage.getItem("order");
    return savedCartJSON && savedOrderJSON;
  };

  useEffect(() => {
    getData();
  }, []);

  const chooseLng = () => {
    setLng((prev) => !prev);
  };

  return lng ? (
    <LngChoose i18n={i18n} chooseLng={chooseLng} />
  ) : (
    <Suspense fallback={<div>Loading...</div>}>
      {isOpen && <ModalWindow t={t} />}

      <div className="container">
        <header>
          <Logo t={t} />
          {/* <Order t={t} /> */}
        </header>
        <main>
          <Head category={category} setCategory={setCategory} />
          <div className="wrapper wrapper-main">
            <Cart t={t} />
            <Products category={category} t={t} />
          </div>
        </main>
        <Footers t={t} />
      </div>
    </Suspense>
  );
}

export default App;
