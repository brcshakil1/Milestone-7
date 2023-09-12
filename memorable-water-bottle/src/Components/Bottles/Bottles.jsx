import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart, removeFromLocalStorage } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";


const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[]);

    // load cart from local storage
    useEffect(()=>{
        console.log(bottles.length)
        if(bottles.length > 0) {
            const storedCart = getStoredCart ();
            // console.log(storedCart, bottles)
            const savedCart = []
            for(const id of storedCart) {
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle) {
                    savedCart.push(bottle)
                }
            }
            setCart(savedCart)
        }
    },[bottles])

    const handleClickPurchase = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id)
    }

    const handleRemoveCart = id => {
        // visual cart remove
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart)
        // remove from local storage
        removeFromLocalStorage(id)
    }
    
    
    return (
        <div>
            <h3>Bottles Available : {bottles.length}</h3>
            <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle 
                                key={bottle.id}
                                bottle={bottle}
                                handleClickPurchase={handleClickPurchase}
                                ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;