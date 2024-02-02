import Hero from "../../components/Hero/Hero";
import './Sponsors.css'

export default function Sponsors() {
    return (
        <>
            <Hero
                title='Sponsors'
                orange='Rowell Ranch Rodeo'
                white='9725 Dublin Canyon Rd, Castro Valley, CA 94552'
                backgroundImage={'./assets/splash-hero.jpeg'}
            />
            <section className='Sponsors'>
                <div className='s'>
                    What's up doc
                </div>
            </section>
        </>
    )
}