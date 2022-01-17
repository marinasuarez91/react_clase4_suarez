import "./ItemListContainer.css"

function ItemCard ({name, color, price}) {
    return <div className="ItemCard">
                <p>{name}</p>
                <p>Color: {color}</p>
                <p>{price}</p>
            </div>
}

export default ItemCard
