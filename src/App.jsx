import { useEffect, useState } from "react";
import { Cart } from "./components/Cart/Cart";
import { ModalWindow } from "./components/ModalWindow/ModalWindow";
import { useSelector } from "react-redux";
import { Head } from "./components/NavMenu/Head";
import { Footers } from "./components/Footers/Footers";
import { Products } from "./components/Products/Products";
import Logo from "./components/Header/Logos";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import { LngChoice } from "./components/LngChoice/LngChoice";
// import LanguageToggle from "./components/Header/LanguageToggle";

function App() {
  const { t } = useTranslation();
  const [category, setCategory] = useState("sku_id_1");
  const isOpen = useSelector((state) => state.modal.isOpen);
  const[language, setLanguage] = useState(true);

const choiceLanguage = () => {
  setLanguage(prev =>!prev);
}
console.log(language);
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
     {language
     ?<LngChoice t={t} 
     choiceLanguage={choiceLanguage}
     />
    
     :<>
     {isOpen && <ModalWindow t={t} />}
      <div className="container">
        <header>
          <Logo t={t} />
          <Head category={category} setCategory={setCategory} />
        </header>
        <main>
          <Cart t={t} />
          <Products category={category} t={t} />
        </main>
        <Footers t={t} />
      </div>
     </>}
    </Suspense>
  );
}

export default App;
