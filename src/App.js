import logo from "./logo.svg";
import "./App.css";
import Directory from "./components/directory.component.jsx/directory.component";
import Home from "./routes/home/home.component";
import { Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/signin/signin.component";
import Contact from "./routes/contact/contact.component";
import Shop from "./routes/shop/shop.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
