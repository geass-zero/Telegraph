import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NodeOverview from "./Components/NodeOverview";
import Faq from "./Components/Faq";
import Team from "./Components/Team";
import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//  Enable session (triggers QR Code modal)

// const web3 = new Web3(provider);
function App() {
 
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/faq" component={Faq} />
          <Route path="/node-overview" component={NodeOverview} />
          <Route path="/team" component={Team} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
