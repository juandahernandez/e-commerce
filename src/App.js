import "./App.css";

import AppRouter from "../src/Components/Routes/AppRouter";
import StoreProvider from "./Store/StoreProvider";
export default function App() {
  return (
    <div className="App">
      <StoreProvider>
        <AppRouter />
      </StoreProvider>
    </div>
  );
}
