import { Routes, Route, Navigate } from "react-router-dom";

import Nav from "./components/Navigation/Navigation";
import Categories from "./pages/Categories";
import AddRecipes from "./pages/AddRecipes";
import MyRecipies from "./pages/MyRecipies";
import Favorites from "./pages/Favorites";
import ShoppingList from "./pages/ShoppingList";
import Search from "./pages/Search";

function App() {
  return (
    <>
    <Nav/>
      <Routes>
   
          <Route path="/categories" element={<Categories />} />
          <Route path="/add" element={<AddRecipes />} />
          <Route path="/my" element={<MyRecipies />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route path="/shoppingList" element={<ShoppingList />} />
          <Route path="/search?" element={<Search />} />

   
      </Routes>
    </>
  );
}

export default App;