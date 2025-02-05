import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

export default function App() {
  return (
    <main className="text-neutral-800">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/ourcakes" element={<Category category={"ourcakes"}/>}></Route>
          <Route path="/ourcookies" element={<Category category={"ourcookies"}/>}></Route>
          <Route path="/blog" element={<Category category={"blog"}/>}></Route>
          <Route path="/product" element={<Product/>}>
             <Route path=":productId" element={<Product/>}></Route>
          </Route>
          <Route path="/cart-page" element={<Cart/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </main>
  )
};