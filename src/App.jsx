import { useState } from "react";
import { Cart } from "./components/Cart/Cart";
import { ModalWindow } from "./components/ModalWindow/ModalWindow";
import { useDispatch, useSelector } from "react-redux";

import { openModal } from "./features/modal/modalSlice";
import { Head } from "./components/Head";
import { Footers } from "./components/Footers";
import Logo from "./components/Logos";

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
