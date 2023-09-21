import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./app/store.js";
import { Provider } from "react-redux";

import "./i18n.js";
import { Suspense } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
   <Suspense fallback={<div>Loading...</div>}>
    <App />
    </Suspense>
  </Provider>
);
