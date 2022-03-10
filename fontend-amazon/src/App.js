import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Footer from "./Footer";
import ShippingTo from "./ShippingTo";
import ScrollToTop from "./ScrollToTop";
import Payment from "./Payment";

function App() {
  const [{}, dispatch] = useStateValue();
  //create a listener for users
  useEffect(() => {
    // once app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("this user is >>>", authUser);

      if (authUser) {
        // the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user log out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <ShippingTo />
                <Checkout />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Payment />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/"
            exact
            element={
              <>
                <Header />
                <ShippingTo />
                <Home />
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
