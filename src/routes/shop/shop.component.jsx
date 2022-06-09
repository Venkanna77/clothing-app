import { useContext } from "react"
import './shop.styles.scss'
import { CategoriesContext } from "../../components/usercontext/categories.component";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path = ":category" element={<Category/>} />
    </Routes>
  );
}

export default Shop