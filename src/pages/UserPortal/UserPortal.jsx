import Hero from '../../components/Hero/Hero'
import OrderHistory from '../../components/OrderHistory/OrderHistory'
import './UserPortal.css'

export default function UserPortal({ user }) {
    return (
        <>
            <Hero
                title='User Portal'
                orange='Rowell Ranch Rodeo'
                white='9725 Dublin Canyon Rd, Castro Valley, CA 94552'
                backgroundImage={'./assets/splash-hero.jpeg'}
                user={user}
            />
            <section className='UserPortal'>
                <h3>Order History</h3>
                <OrderHistory />
            </section>
        </>
    )
}