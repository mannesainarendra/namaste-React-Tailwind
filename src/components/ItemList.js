const ItemList = ({items})=> {
    return (
        <div>
            {items.map((item)=> 
             (
                <div className="text-left my-5 border-gray-300 border-b-2" key={item.card.info.id}>
                    <div className="font-semibold my-1">
                        <span>{item.card.info.name}</span> - Rs.
                        <span>{item.card.info.itemBadge.price || item.card.info.defaultPrice}</span>
                    </div>  
                    <p className="text-xs mb-2">{item.card.info.description}</p>
                </div>
            )
                )}
        </div>
    )
}

export default ItemList;