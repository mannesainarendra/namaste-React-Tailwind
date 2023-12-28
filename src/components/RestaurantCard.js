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
    return <div className="text-sm">
                <img className="rounded-t-xl w-[100%] h-[180px]" src={CARD_URL + resData.info.cloudinaryImageId}/>
                <h3 className="font-bold text-[1rem] my-2 mx-1">{name}</h3>
                <h3 className="mx-1">{cuisines.join(", ")}</h3>
                <h4 className="mx-1">{avgRating}</h4>
                <h4 className="mx-1">{costForTwo}</h4>
                <h4 className="mx-1">{sla.deliveryTime} minutes</h4>
            </div>

}

export const withPromotedLabel = (RestaurantCard) => {

        return (props) => {
            return <div>
                        <label className="absolute bg-black text-white px-2 rounded-tl-lg">Promoted</label>
                        <RestaurantCard {...props}/>
                </div>
        }
}

export default RestaurantCard;