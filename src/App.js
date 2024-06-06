import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Categories from "./pages/categories/Categories";
import Productdetail from "./pages/productDetail/Productdetail";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId?" element={<Categories />} />
          <Route path="/products/:productId" element={<Productdetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
