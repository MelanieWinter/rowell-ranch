import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react';
import Hero from "../../components/Hero/Hero";
import './Sponsors.css'
import SponsorCard from '../../components/SponsorCard/SponsorCard';

export default function Sponsors() {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })  

    const x = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"])

    return (
        <>
            <Hero
                title='Sponsors'
                orange='Rowell Ranch Rodeo'
                white='9725 Dublin Canyon Rd, Castro Valley, CA 94552'
                backgroundImage={'./assets/splash-hero.jpeg'}
            />
            <section className='Sponsors' ref={targetRef}>
                <p>
                    Thank you to all of the Rowell Ranch Rodeo Sponsors! In addition to ensuring the long-term vitality of the Rowell Ranch Rodeo, our sponsors assist the Rowell Ranch Rodeo to provide direct community benefits through service projects for the Hayward Rotary Club and the Castro Valley Breakfast Lions Club.
                </p>
                <div className='s-scroll' >
                    <motion.div className='s-logos' style={{ x }}>
                        <SponsorCard 
                            name="A&B Mechanical"
                            logo="./assets/sponsors/ab-mech.png"
                        />
                        <SponsorCard 
                            name="Berlogar Stevens & Associates"
                            logo="./assets/sponsors/berlogar.png"
                        />
                        <SponsorCard 
                            name="Chris Ising"
                            logo="./assets/sponsors/chris-ising.png"
                        />
                        <SponsorCard 
                            name="Columbia Electric Inc."
                            logo="./assets/sponsors/columbia-elec.png"
                        />
                        <SponsorCard 
                            name="Comfort Inn"
                            logo="./assets/sponsors/comfort-inn.png"
                        />
                        <SponsorCard 
                            name="Ising's Culligan"
                            logo="./assets/sponsors/culligan.png"
                        />
                        <SponsorCard 
                            name="Dublin Toyota"
                            logo="./assets/sponsors/dublin-toyota.png"
                        />
                        <SponsorCard 
                            name="FH Dailey Chevrolet"
                            logo="./assets/sponsors/fh-dailey.png"
                        />
                        <SponsorCard 
                            name="Gainous Roofing"
                            logo="./assets/sponsors/gainous-roofing.png"
                        />
                        <SponsorCard 
                            name="Henstock Chiropractic"
                            logo="./assets/sponsors/henstock.png"
                        />
                        <SponsorCard 
                            name="JP Guide Service"
                            logo="./assets/sponsors/jp-guide.png"
                        />
                        <SponsorCard 
                            name="Mike's Feed & Pets"
                            logo="./assets/sponsors/mikes-feed.jpeg"
                        />
                        <SponsorCard 
                            name="MKTG Sports + Entertainment"
                            logo="./assets/sponsors/mktg.png"
                        />
                        <SponsorCard 
                            name="Morgan Lodge"
                            logo="./assets/sponsors/morgan-lodge.png"
                        />
                        <SponsorCard 
                            name="Nick's Flooring"
                            logo="./assets/sponsors/nicks-flooring.png"
                        />
                        <SponsorCard 
                            name="International Union of Operating Engineers"
                            logo="./assets/sponsors/op-eng.png"
                        />
                        <SponsorCard 
                            name="Stanford Health Care"
                            logo="./assets/sponsors/stanford.png"
                        />
                        <SponsorCard 
                            name="Sunol Super Stop"
                            logo="./assets/sponsors/sunol-super-stop.png"
                        />
                        <SponsorCard 
                            name="Uncle Credit Union"
                            logo="./assets/sponsors/uncle.png"
                        />
                        <SponsorCard 
                            name="Underground Construction Co., Inc."
                            logo="./assets/sponsors/underground-construction.png"
                        />
                        <SponsorCard 
                            name="Val's Burgers"
                            logo="./assets/sponsors/vals.png"
                        />
                        <SponsorCard 
                            name="White Brothers Mill"
                            logo="./assets/sponsors/white-bros.png"
                        />
                        <SponsorCard 
                            name="Classy Canine's Wiggle Rumps"
                            logo="./assets/sponsors/wiggle.png"
                        />
                    </motion.div>
                </div>
            </section>
        </>
    )
}