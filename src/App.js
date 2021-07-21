import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "@avaya/neo/neo/dist/css/neo/neo.min.css";
import "./App.css";

import { NeoNavBar, NeoNavLeftButton, NeoNavLeft, NeoCheckbox } from "./neo";

import ButtonSandBox from "./wrapper/ButtonSandBox";
import TooltipSandBox from "./wrapper/TooltipSandBox";
import IconSandBox from "./wrapper/IconSandBox";
import TooltipProtoSandBox from "./wrapper/TooltipProtoSandBox";
import TooltipContextProvider from "./neo/tooltip/TooltipContext";

import Home from "./pages/Home";

import logo from "./assets/avaya-logo-header.svg";

const App = () => {
  const [isOpen, setOpen] = useState(false);
  const [isDarktheme, setDarkTheme] = useState(false);
  return (
    <Router>
      <div
        style={{ width: "100%", minHeight: "100vh" }}
        className={
          isDarktheme
            ? "neo-dark neo-global-colors"
            : "neo-light neo-global-colors"
        }
      >
        <NeoNavBar style={{ position: "fixed", width: "100%", zIndex: 51 }}>
          <NeoNavLeftButton>
            <div className="neo-badge__navbutton">
              <button
                className="neo-badge__navbutton--content neo-btn neo-icon-menu"
                onClick={() => setOpen(!isOpen)}
              ></button>
            </div>
            <a href={"/"} className="neo-navbar__brand" title="Neo Framework">
              <img src={logo} alt={"avaya logo"} />
            </a>

            <NeoCheckbox label={"Dark theme"} onChange={setDarkTheme} />
          </NeoNavLeftButton>
        </NeoNavBar>
        <div className={"layout-box"}>
          <NeoNavLeft open={isOpen} onClick={() => setOpen(!isOpen)} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/tooltips">
              <TooltipSandBox />
            </Route>
            <Route exact path="/tooltips-proto">
              <TooltipContextProvider>
                <TooltipProtoSandBox />
              </TooltipContextProvider>
            </Route>
            <Route exact path="/buttons">
              <ButtonSandBox />
            </Route>
            <Route exact path="/icons">
              <IconSandBox />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
