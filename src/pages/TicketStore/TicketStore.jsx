import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Hero from '../../components/Hero/Hero'
import NavLink from '../../components/NavLink/NavLink';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import EventsList from '../../components/EventsList/EventsList';
import * as ordersAPI from '../../utilities/orders-api';
import './TicketStore.css'

export default function TicketStore({ scheduledEvents }) {
    const [cart, setCart] = useState(null);
    const navigate = useNavigate();

    useEffect(function() {
        async function getCart() {
            const cart = await ordersAPI.getCart();
            setCart(cart);
        }
        getCart();
    }, []);

    async function handleAddToOrder(eventId) {
        const updatedCart = await ordersAPI.addItemToCart(eventId);
        setCart(updatedCart);
    }

    async function handleChangeQty(eventId, newQty) {
        const updatedCart = await ordersAPI.setItemQtyInCart(eventId, newQty);
        setCart(updatedCart);
    }

    async function handleCheckout() {
        await ordersAPI.checkout();
        navigate('/orders');
    }

    return (
        <section className='TicketStore'>
            <Hero
            title='Buy Tickets'
            orangeIcon={<FontAwesomeIcon icon={faLocationDot} />}
            orange='Rowell Ranch Rodeo'
            white='9725 Dublin Canyon Rd, Castro Valley, CA 94552'
            backgroundImage={'./assets/splash-hero.jpeg'}
            />
            <div className='ts-div'>
                <EventsList 
                    scheduledEvents={scheduledEvents} 
                    handleAddToOrder={handleAddToOrder}
                />
                <ShoppingCart 
                    order={cart}
                    handleChangeQty={handleChangeQty}
                    handleCheckout={handleCheckout}
                />
            </div>
        </section>
    )
}