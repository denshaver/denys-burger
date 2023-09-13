import { products } from "./data/products";

import { useState } from "react";
import { Cart } from "./components/Cart";
import { ModalWindow } from "./components/ModalWindow";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "./features/modal/modalSlice";
import { Head } from "./components/Head";
import { Footers } from "./components/Footers";
import Logo from "./components/Logos";

function App() {
  const dispatch = useDispatch();
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
          <section className="products-container">
            <h1>Menus</h1>
            <div className="products">
              {products
                .filter((product) => product.categoryId === category)
                .map((product) => {
                  return (
                    <div className="product-item" key={product.id}>
                      <img src={product.img} alt="" style={{with:"200px",height:"200px", borderRadius:"10px"}} />
                      <h2>{product.price}$</h2>
                      <h3>{product.title}</h3>
                      <span>{product.weight}g</span>
                      <button onClick={() => dispatch(openModal(product.id))}>
                        Add to cart
                      </button>
                    </div>
                  );
                })}
            </div>
          </section>
        </main>
        <Footers />
      </div>
    </>
  );
}

export default App;
