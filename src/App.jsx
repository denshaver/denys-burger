import { useState } from "react";
import { Cart } from "./components/Cart/Cart";
import { ModalWindow } from "./components/ModalWindow/ModalWindow";
import { useDispatch, useSelector } from "react-redux";
import { Head } from "./components/NavMenu/Head";
import { Footers } from "./components/Footers/Footers";
import { Products } from "./components/Products/Products";
import Logo from "./components/Header/Logos";
import { openModal } from "./features/modal/modalSlice";

function App() {
  const [category, setCategory] = useState("sku_id_1");
  const isOpen = useSelector((state) => state.modal.isOpen);

  return (
    <>
      {isOpen && <ModalWindow />}
      <div className="container">
        <header>
          <Logo />
          <Head category={category} setCategory={setCategory} />
        </header>
        <main>
          <Cart />

          <Products category={category} />

        </main>
        <Footers />
      </div>
    </>
  );
}

export default App;
