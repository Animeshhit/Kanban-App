import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import store from "./state/store.ts";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
