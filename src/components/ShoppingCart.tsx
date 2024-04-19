import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import CartItem from "./CartItem";
import { formatCurrency } from "../utils/formatCur";
import storeItem from "../data/items.json";

type ShoppingCartProps = {
    isOpen:boolean
}

export function ShoppingCart ({isOpen}:ShoppingCartProps){
    const {closeCart, cartItems} = useShoppingCart()
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>I'm gonna buy these today</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item =>(
                        <CartItem key={item.id} {...item}/>
                    ))}
                    <div className="ms-auto fw-bold fs-5">
                        Total{" "}
                        {formatCurrency(
                            cartItems.reduce((total, cartItems)=>{
                                const item = storeItem.find(i=> i.id === cartItems.id)
                                return total + (item?.price || 0 )*cartItems.quantity
                            },0)
                           
                        )}
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}