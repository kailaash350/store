import { Button,Card } from "react-bootstrap"

import { formatCurrency } from "../utils/formatCur";
import { useShoppingCart } from "../context/shoppingCartContext";
type StoreItemProps ={
    id:number,
    name:string,
    price:number,
    imgUrl:string
}


const StoreItem = ({id, name, price, imgUrl}:StoreItemProps) => {
  const {getItemQuantity, increaseCartQuantity,
     decreaseCartQuantity, removeFromCart} = useShoppingCart();
    let quantity=getItemQuantity(id);
  return (
    <Card key={id}>
      <Card.Img variant="top"
      height="200px" style={{objectFit:"cover"}} src={imgUrl}></Card.Img>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-basline mb-4">
            <span className="fs-2">{name}</span>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
            {quantity === 0 ?
            <Button className="w-100" onClick={()=>increaseCartQuantity(id)}>Add to card</Button>
                :(
                    <div className="d-flex align-items-center flex-column"
                    style={{gap:'0.5rem'}}>

                    <div className="d-flex align-items-center justify-content-center"
                     style={{gap:'.5rem'}}>
                        <Button onClick={()=>decreaseCartQuantity(id)}>-</Button>
                        <span className="fs-3">{quantity} </span>added to cart
                        <Button onClick={()=>increaseCartQuantity(id)}>+</Button>
                     </div>
                    <Button className="bg-danger" onClick={()=>removeFromCart(id)}>Remove</Button>
                    </div>
                )
            }
        </div>
      </Card.Body>
    </Card>
  );
}

export default StoreItem
