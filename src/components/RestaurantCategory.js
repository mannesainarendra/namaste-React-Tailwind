import {useState} from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({data}) => {

    const [showItems, setShowItems] = useState(false);
    const [showAccordian, setShowAccordian] = useState("⬇️");

    const handleItems = () => {
        setShowItems(!showItems);
        if(showAccordian === "⬇️"){
            setShowAccordian("⬆️");
        }else{
            setShowAccordian("⬇️");
        }
    }

    return (
        <div className="flex flex-col bg-gray-100 shadow-lg my-4 p-3 rounded-lg cursor-pointer" onClick={handleItems}>
            <div className="flex justify-between">
                {/* Header */}
                <h1 className="font-bold text-lg">{data.title} ({data.itemCards.length})</h1>
                <span className="text-lg">{showAccordian}</span>
                {/* Accordian Body */}
            </div>
            {showItems && <ItemList items={data.itemCards}/>}
            
        </div>
    )
}

export default RestaurantCategory;