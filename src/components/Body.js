import resList from "../utils/mockData";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filterRestaurantList, setFilterRestaurantList] = useState([]);

    console.log(filterRestaurantList);

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    //If no dependency array => useEffect is called on every render
    //If the dependency array is empty = [] => useEffect is called only on the first render(Just once)
    //If the dependency array has a value => useEffect is called every time the value in the dependency array changes
    useEffect(() =>{
        fetchData();
    }, []);

    const fetchData = async () => {

            const response = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
            );
            // console.log(response);
            const json = await response.json();
            console.log(json);
            // console.log(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            //Optional Chaining
            setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilterRestaurantList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();
    //conditional rendering
    // if(listOfRestaurants.length === 0){
    //     return <Shimmer/>
    // }
    if (onlineStatus === false) {
        return <h1>Looks like you are offline. Please check your internet connection.</h1>;
    }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
            <div className="body">
                <div className="flex">
                    <div className="search-input-container py-10">
                        <input type="text" className="border-2 border-black rounded-lg px-2 py-1 mx-2" onChange={(e)=>{
                            setSearchText(e.target.value);
                        }} value={searchText}/>
                        <button className="bg-gray-500 px-4 py-1.5 rounded-lg mx-2 text-white font-bold" onClick={() => {
                            const filterRestaurantList = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilterRestaurantList(filterRestaurantList);
                            console.log("Button Clicked");
                        }}>Search</button>
                    </div>
                    <div className="flex items-center mx-4">
                        <button className="bg-green-300 px-4 py-1.5 rounded-lg mx-2"  onClick={() => {
                        const filterRestaurantList = listOfRestaurants.filter((res)=> res.info.avgRating > 4.3);
                            setFilterRestaurantList(filterRestaurantList);
                            console.log("Button Clicked");
                        }}>Top rated restaurants
                        </button>
                    </div>
                    
                </div>
                
                <div className="flex flex-wrap gap-4 p-4">
                    {filterRestaurantList.map((restaurant) => ( 
                        <Link className="border-2 border-black bg-gray-100 w-[15.5%] rounded-xl" key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>
                            {(restaurant.info.promoted === true)?<RestaurantCardPromoted resData={restaurant}/>:<RestaurantCard resData={restaurant}/>}
                        </Link>
                    ))}
                </div>
           </div>
    )
}

export default Body;