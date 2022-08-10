import "./App.css";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Pages/Contact/Contact";
import Account from "./components/Pages/Account/Account";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="" element={<Home />}>
          <Route path="contact" element={<Contact />} />
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
