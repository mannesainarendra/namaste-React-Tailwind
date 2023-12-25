import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { MENU_URL } from "../utils/constants"
import Shimmer from "./Shimmer"



const RestaurantMenu = () => {

    const [menuItems, setMenuItems] = useState(null);
        
    const {resId} = useParams()
   

    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await fetch(MENU_URL + resId);
        const json = await response.json();
        setMenuItems(json)
        
    }

    if (menuItems === null) return <Shimmer />

    const {name, cuisines, costForTwoMessage} = menuItems?.data?.cards[2]?.card?.card?.info;

    const {itemCards} = menuItems?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
        <h1>{name}</h1>
        <h2>{cuisines.join(", ")}</h2>
        <h3>{costForTwoMessage}</h3>
        <ul>
            {itemCards.map((item)=>{
                return <li key={item.card.info.id}>{item.card.info.name}</li>
            })}
        </ul>
    </div>
  )
}

export default RestaurantMenu