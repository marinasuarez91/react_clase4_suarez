import "./ItemListContainer.css"
import ItemCard from "./ItemCard"


function ItemListContainer () {
    return <div className="ItemListContainer">
        <ItemCard    
            name="Jacaranda"
            color="negro"
            price="$8200"
        />

        <ItemCard 
            name="Andes"
            color="suela"
            price="$9000"
        />

        <ItemCard 
            name="Selva"
            color="mostaza"
            price="$8500"
        />
        </div>
}

export default ItemListContainer