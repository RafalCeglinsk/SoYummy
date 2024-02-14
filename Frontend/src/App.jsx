import {lazy} from "react"
import { Router, Routes } from "../node_modules/react-router-dom/dist/index";

const ShoppingListPage = lazy(() => import("./pages/ShoppingListPage/ShoppingListPage.jsx"))

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
     <Router>
      <Routes  path ="/shopping-list" element={
      <ShoppingListPage/>}/>
     </Router>
    </div>
  );
};

export default App
