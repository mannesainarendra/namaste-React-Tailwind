import { MENU_URL } from "./constants";
import { useState, useEffect } from "react";
const useRestaurantMenu = (resId) => {
    
    const [menuItems, setMenuItems] = useState(null);

  useEffect(()=>{
      fetchData();
  }, [])

  const fetchData = async () =>{
    const response = await fetch(MENU_URL + resId);
    const json = await response.json();
    setMenuItems(json);
  }
    return menuItems;
}

export default useRestaurantMenu;