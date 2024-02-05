import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Hero from '../../components/Hero/Hero'
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import EventsList from '../../components/EventsList/EventsList';
import * as ordersAPI from '../../utilities/orders-api';
import './TicketStore.css'

export default function TicketStore({ scheduledEvents, handleChangeQty, handleCheckout, cart, setCart, handleAddToOrder }) {

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
                <ShoppingCart 
                    order={cart}
                    handleChangeQty={handleChangeQty}
                    handleCheckout={handleCheckout}
                    handleAddToOrder={handleAddToOrder}
                />
                <EventsList 
                    scheduledEvents={scheduledEvents} 
                    handleAddToOrder={handleAddToOrder}
                />
            </div>
        </section>
    )
}