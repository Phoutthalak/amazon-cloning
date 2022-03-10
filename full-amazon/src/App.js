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
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const stripePromise = loadStripe(
  "pk_test_51KbcvzGpU9pd4BKgiRbyXbXHJzFNWuPhcgVUp9aMNEiyEMdiZyd4v76kbQYEMgpwiSfGNCJjuIkZBi0hp14G3zYt00SXPGROkV"
);

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
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
                <Footer />
              </>
            }
          ></Route>
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
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
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
