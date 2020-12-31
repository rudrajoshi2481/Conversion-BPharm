import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Topictitles from "./components/Topictitles";
import Button from "@material-ui/core/Button";
import MetricConversion from "./components/conversions/MetricConversion";
import DosageFormConversion from "./components/dosageForms/DosageBasedonAge";
function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <div
              style={{
                width: "100vw",
                height: "90vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection:'column'
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/topics">
                <Button size="large" variant="contained" color="secondary">
                  Topics
                </Button>
                
              </Link>
              <br />
              <div style={{marginLeft:'15px'}}>
              <h1>   T&C (terms & condition's)</h1>
              <span>   Use on Your Own Risk</span><br/><br/>
              <strong><span>   Marketing And Branding is whole Motivation</span></strong><br/><br/>
              <span>   Ans verifing  Purpose Only</span><br/><br/>
              {/* <span>   Formuls are not verified by <strong>Smart Persons</strong> so mistakes are obivous</span><br/> */}
              {/* <span>I <a href="https://rudrajoshi.me">@rudra joshi </a>created for this site for fun & Practice Purpose</span> */}
              </div>
            </div>
          </Route>
          <Route path="/topics">
            <div className="topics-title-app">
              <Topictitles />
            </div>
          </Route>
          <Route path="/conversion">
              <Route path="/conversion/metric-conversion"> 
                <MetricConversion />
              </Route>
              <Route path="/conversion/dosage-forms"> 
                <DosageFormConversion />
              </Route>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h4" color="inherit">
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              <span className="app-brand-name">Rudra Joshi</span>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default App;
