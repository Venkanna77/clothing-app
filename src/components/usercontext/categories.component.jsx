import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../../shop-data";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const CategoriesContext = createContext();

export const CategoriesProvider = ({children}) => {
    const [categoriesMap,setCategoriesMap] = useState({})
    useEffect( ()=>{
        const getCategoriesMap = async () =>{
        const categoryMap=await getCategoriesAndDocuments()
        setCategoriesMap(categoryMap)
        }
        getCategoriesMap();
    },[])
    const value = { categoriesMap };
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}