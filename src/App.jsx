import { products } from "./data/products";
import { categories } from "./data/categories";
import { useState } from "react";
import { Cart } from "./components/Cart";
import { ModalWindow } from "./components/ModalWindow";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "./features/modal/modalSlice";

function App() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("sku_id_1");
  const isOpen = useSelector((state) => state.modal.isOpen);

  const handleCategory = (category) => setCategory(category);
  return (
    <>
      {isOpen && <ModalWindow />}
      <div className="container">
        <header>
          {categories.map((cat) => {
            return (
              <button
                onClick={() => handleCategory(cat.id)}
                className={cat.id === category ? "choosen" : ""}
                key={cat.id}
              >
                {cat.title}
              </button>
            );
          })}
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
                      <img src={product.img} alt="" />
                      <h2>{product.price}$</h2>
                      <h3>{product.title}</h3>
                      <button onClick={() => dispatch(openModal(product.id))}>
                        Add to cart
                      </button>
                    </div>
                  );
                })}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
