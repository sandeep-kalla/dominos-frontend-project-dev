import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import EveryDayValue from "./pages/EveryDayValue"
import NewLaunches from "./pages/NewLaunches"
import CheeseVolcano from "./pages/CheeseVolcano"
import VegPizza from "./pages/VegPizza"
import GourmetPizza from "./pages/GourmetPizza"
import NonVegPizza from "./pages/NonVegPizza"
import Beverages from "./pages/Beverages"
import Breads from "./pages/Breads"
import PizzaMania from "./pages/PizzaMania"
import ValueCombos from "./pages/ValueCombos"
import Desserts from "./pages/Desserts"
import CheeseBurstPizza from "./pages/CheeseBurstPizza"
import SpicyPizza from "./pages/SpicyPizza"
import Header from "./shared/components/Header";
import LoginPopup from "./shared/components/LoginPopup"
import { useState } from "react";

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'everyday',
      element: <EveryDayValue />
    },
    {
      path: 'new-launches',
      element: <NewLaunches />
    },
    {
      path: 'cheese-volcano',
      element: <CheeseVolcano />
    },
    {
      path: 'veg-pizza',
      element: <VegPizza />
    },
    {
      path: 'gourmet-pizza',
      element: <GourmetPizza />
    },
    {
      path: 'non-veg-pizza',
      element: <NonVegPizza />
    },
    {
      path: 'beverages',
      element: <Beverages />
    },
    {
      path: 'breads',
      element: <Breads />
    },
    {
      path: 'pizza-mania',
      element: <PizzaMania />
    },
    {
      path: 'value-combos',
      element: <ValueCombos />
    },
    {
      path: 'desserts',
      element: <Desserts />
    },
    {
      path: 'cheese-burst-pizza',
      element: <CheeseBurstPizza />
    },
    {
      path: 'spicy-pizza',
      element: <SpicyPizza />
    }
  ])
  
  const [showLogin, setShowLogin] = useState(false)

  const handleLogin = () => {
    window.location.reload();
  };

  return (
    <>
      {
        showLogin ? <LoginPopup setShowLogin={setShowLogin} onLogin={handleLogin}/> : <></>
      }
      <ToastContainer />
      <Header setShowLogin={setShowLogin}/>
      <RouterProvider router={router} />
    </>
    
  )
}

export default App
