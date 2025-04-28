import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import "@fontsource/roboto"; 
import LoggedoutLandingPage from './LandingPage/LoggedoutLandingPage.jsx';
import LoginPage from './Login/Login.jsx';
import Register from './Register/Register.jsx';
import ProductPage from './ProductDetails/ProductDetails.jsx';
import ProductListPage from './ProductDetails/ProductListPage.jsx';
import AdminHome from './Admin/AdminHomepage.jsx';
import AdminProductDetails from './Admin/AdminProductDetails.jsx';
import ProductCrud from './Admin/ProductCrud.jsx';
import AdminUsersList from './Admin/AdminUserList.jsx';
import AdminViewUserOrders from './Admin/AdminViewUserOrders.jsx';
import AdminOrdersPage from './Admin/AdminOrdersPage.jsx';
import AdminOrderDetails from './Admin/AdminOrderDetails.jsx';
import AdminAddNewProductPage from './Admin/AdminAddNewProductPage.jsx';
import AdminFeedbackViewPage from './Admin/AdminFeedbackViewPage.jsx';
import KidsCatList from './ProductDetails/Categories/KidsCatList.jsx';
import AccessoriesCatList from './ProductDetails/Categories/AccessoriesCatList.jsx';
import WomenCatList from './ProductDetails/Categories/WomenCatList.jsx';
import MenCatList from './ProductDetails/Categories/MenCatList.jsx';
import UserHome from './User/UserHome.jsx';
import ProductDetails from './User/ProductDetails.jsx';
import UserPaymentPage from './User/UserPaymentPage.jsx';
import UserOrdersPage from './User/UserOrdersPage.jsx';
import UserTrackOrderPage from './User/UserTrackOrders.jsx';
import UserProfilePage from './User/UserProfile.jsx';
createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<LoggedoutLandingPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/product' element={<ProductPage/>}/>
      <Route path='/productlist' element={<ProductListPage/>}/>
      <Route path='/adminhome' element={<AdminHome/>}/>
      <Route path='/productlistcrud' element={<ProductCrud/>}/>
      <Route path='/adminproductdetails' element={<AdminProductDetails/>}/>
      <Route path='/adminuserlist' element={<AdminUsersList/>}/>
      <Route path='/adminviewuserorders' element={<AdminViewUserOrders/>}/>
      <Route path='/adminorderspage' element={<AdminOrdersPage/>}/>
      <Route path='/adminorderdetails' element={<AdminOrderDetails/>}/>
      <Route path='/adminaddnewproduct' element={<AdminAddNewProductPage/>}/>
      <Route path='/adminfeedbackview' element={<AdminFeedbackViewPage/>}/>
      <Route path='/category/kids' element={<KidsCatList/>}/>
      <Route path='/category/accessories' element={<AccessoriesCatList/>}/>
      <Route path='/category/women' element={<WomenCatList/>}/>
      <Route path='/category/men' element={<MenCatList/>}/>

      <Route path='/userhome' element={<UserHome/>}/>
      <Route path='/productdetails' element={<ProductDetails/>}/>
      <Route path='/userpayment' element={<UserPaymentPage/>}/>
      <Route path='/userorders' element={<UserOrdersPage/>}/>
      <Route path='/usertrackorder' element={<UserTrackOrderPage/>}/>
      <Route path='/userprofile' element={<UserProfilePage/>}/>
    </Routes>
  </Router>
  
)
