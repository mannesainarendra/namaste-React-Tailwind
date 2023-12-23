import {CARD_URL} from "../utils/constants";
const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name, cuisines, avgRating, costForTwo, sla} = resData.info;
    // console.log(name);
    // console.log(cuisines);
    // console.log(avgRating);
    // console.log(costForTwo);
    // console.log(sla.deliveryTime);
//   const {resImage, resName, cuisine, rating, deliveryTime} = props;
    return <div className="res-card">
                <img className="res-logo" src={CARD_URL + resData.info.cloudinaryImageId}/>
                <h3>{name}</h3>
                <h3>{cuisines.join(", ")}</h3>
                <h4>{avgRating}</h4>
                <h4>{costForTwo}</h4>
                <h4>{sla.deliveryTime} minutes</h4>
           </div>
}

export default RestaurantCard;