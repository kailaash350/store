import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext"
import storeItem from "../data/items.json";
import { formatCurrency } from "../utils/formatCur";

type CartItemProps = {
    id:number
    quantity:number
}

export default function CartItem({id, quantity}:CartItemProps) {
    const {removeFromCart} = useShoppingCart();

    const item = storeItem.find((i: { id: number; }) => i.id===id);
        if(item ==null) return null;
    

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img src={item.imgUrl} style={{width:"125px", height:"75px", objectFit:"cover"}}/>
    <div className="me-auto">
    <div>
        {item.name}{" "}
        {quantity > 1 &&
            <span className="text-muted" style={{fontSize:"0.75rem"}}>
                x{quantity}
            </span> }
    </div>
    <div className="muted-text" style={{fontSize:"0.90rem"}}>
        {formatCurrency(item.price)}
    </div>
    </div>
    <div>{formatCurrency(item.price * quantity)}</div>
    <Button variant="outline-danger" size="sm" onClick={()=>removeFromCart(item.id)}>x</Button>
    </Stack>
  )
}
