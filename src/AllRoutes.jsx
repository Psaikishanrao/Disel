import { Route, Routes } from "react-router-dom";
import {Home} from "./Pages/Home"
import {Products} from "./Pages/Products";
import {Men} from "./Pages/Men";
import {Women} from "./Pages/Women"
import {Kid} from "./Pages/Kid"
import { SingleProduct } from "./Pages/SingleProduct";
import { Login } from "./Pages/Login";
import { PrivateRoute } from "./Components/PrivateRoute";
import { Cart } from "./Pages/Cart";
import { Signup } from "./Pages/Signup";
import {  AdminLogin } from "./Pages/AdminLogin";
import { AdminPage } from "./Pages/AdminPage";
import { WishList } from "./Pages/WishList";
import {Aboutus} from "./Pages/Aboutus";
import {Storelocator} from "./Pages/Storelocator"
import {Productcar} from "./Pages/Productcar";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Products" element={<Products />}></Route>
      <Route path="/Men" element={<PrivateRoute><Men /></PrivateRoute>}></Route>
      <Route path="/Women" element={<PrivateRoute><Women /></PrivateRoute>}></Route>
      <Route path="/Kid" element={<PrivateRoute><Kid /></PrivateRoute>}></Route>
      <Route path="Aboutus" element={<Aboutus/>}></Route>
      <Route path="/Storelocator" element={<Storelocator/>}></Route>
      <Route path="/Productcar" element={<Productcar/>} ></Route>
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/Adminlogin" element={<AdminLogin/>}></Route>
      <Route path="/Cart" element={<PrivateRoute><Cart/></PrivateRoute>}></Route>
      <Route path="/Adminpage" element={<AdminPage/>}></Route>
      {/* <Route
        path="/product/:id"
        element={
          <PrivateRoute>
            {/* <SingleProduct /> */}
          {/* </PrivateRoute>
        }
      ></Route> */} 
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/wish" element={<PrivateRoute><WishList /></PrivateRoute>}></Route>
    </Routes>
  );
};
