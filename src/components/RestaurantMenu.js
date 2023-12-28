import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import Shimmer from "./Shimmer"
import RestaurantCategory from "./RestaurantCategory"




const RestaurantMenu = () => {

    const {resId} = useParams()
    
    
    const menuItems = useRestaurantMenu(resId);

    if (menuItems === null) return <Shimmer />
    
    const {name, cuisines, costForTwoMessage} = menuItems?.data?.cards[2]?.card?.card?.info;

    // const {itemCards} = menuItems?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    //console.log(menuItems?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const caterogies = menuItems?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  return (
    <div className="mx-auto my-6 p-3 w-6/12  text-center">
        <h1 className="font-bold  text-2xl">{name}</h1>
        <p className="font-semibold">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        {caterogies.map((category)=> <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}/>)}
        
    </div>
  )
}

export default RestaurantMenu