import Login from "../pages/Login";
import Registation from "../pages/registation";
import {Route, Routes} from "react-router-dom";
import Cart from "../pages/CartManage";
import Product from "../pages/ProductManage";


function App() {
  return (
    <div className="App">

        <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route  path="reg" element={<Registation/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="product" element={<Product/>}/>
        </Routes>
    </div>
  );
}

export default App;
