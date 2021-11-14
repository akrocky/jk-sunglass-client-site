
import './App.css';
import Header from './Pages/Login/Shared/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import MenS from './Pages/MenS/MenS';
import WomenS from './Pages/WomenS/WomenS';
import Brands from './Pages/Brands/Brands';
import AboutUs from './Pages/AboutUs/AboutUs';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NewG from './Pages/NewG/NewG';
import Dashboard from './Pages/Dashboard/Dashboard';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Footer from './Pages/Login/Shared/Footer/Footer';
import Purchase from './Pages/Purchase/Purchase';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';

function App() {
  return (
    <div >


      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/menSunglass">
              <MenS></MenS>

            </Route>
            <Route path="/womenSunglass">
              <WomenS></WomenS>
            </Route>
            <Route path="/brands">
              <Brands></Brands>

            </Route>
            <Route path="/newSunglass">
              <NewG></NewG>

            </Route>
            <Route path="/aboutUs">
              <AboutUs></AboutUs>

            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>

            </Route>
            <PrivateRoute path="/purchase">
              <Purchase></Purchase>

            </PrivateRoute>
            <Route path="/myorders">
              <MyOrders></MyOrders>

            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>

            </PrivateRoute>
            <Route exact path="/">
              <Home></Home>

            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>



    </div>
  );
}

export default App;
