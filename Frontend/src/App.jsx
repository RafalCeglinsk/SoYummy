import {lazy} from "react"
import { Routes, Route } from "react-router-dom";
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
     <Routes>
      <Route  path ="/shopping-list" element={
      <ShoppingListPage/>}/>
     </Routes>
    </div>
  );
};

export default App
