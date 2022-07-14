import React from "react";
import {BrowserRouter} from "react-router-dom"
import MenuBar from "./components/MenuBar/MenuBar";
import {AppMenuContext} from "./contexts/menuContext";
import Routers from "./routes/routers";
function App() {
  return (
    <BrowserRouter>
      <AppMenuContext>
        <MenuBar/>
        <Routers>
        </Routers>
      </AppMenuContext>
      
    </BrowserRouter>
  );
}

export default App; 
