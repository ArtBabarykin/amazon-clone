import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51KtzstE1lKFrksjtrY8CHrrSNd8weAhSASCqNBlNi6yJe0asQ6dp3cZiXe8pC48vqnFXLuAnSudF5R7pxQRu6rSX00357mLxsU"
);

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(`The user is >>>>>`, authUser);
      authUser
        ? dispatch({
            type: "SET_USER",
            user: authUser,
          })
        : dispatch({
            type: "SET_USER",
            user: null,
          });
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />Î
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
