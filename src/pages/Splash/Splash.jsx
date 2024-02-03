import { useEffect, useRef } from 'react'
import Hero from '../../components/Hero/Hero'
import NumberCarousel from '../../components/NumberCarousel/NumberCarousel';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import Map from '../../components/Map/Map';
import Schedule from '../../components/Schedule/Schedule';
import ReadMoreButton from '../../components/ReadMoreButton/ReadMoreButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Carousel from '../../components/Carousel/Carousel';
import './Splash.css';

export default function Splash({ scheduledEvents }) {
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, {
            threshold: 1,
        });
    
        cardRefs.current.forEach(cardRef => {
            observer.observe(cardRef);
        });
    
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <Hero
            title='Welcome Rodeo Fans'
            orangeIcon={<FontAwesomeIcon icon={faLocationDot} />}
            orange='Rowell Ranch Rodeo'
            white='9725 Dublin Canyon Rd, Castro Valley, CA 94552'
            backgroundImage={'./assets/splash-hero.jpeg'}
            />
            <section className='Splash'>
                <div className='s-sec1'>
                    <NumberCarousel />
                    <VideoPlayer />
                </div>
                <div className='s-sec2'>
                    <div className='map-api'>
                        <Map />
                    </div>
                    <div className='s-sec2-content'>
                        <h2 className='a-h2'>ROWELL RANCH RODEO PARK</h2>
                        <span className='a-orange-span'>
                        9725 Dublin Canyon Rd, Castro Valley, CA 94552
                        </span>
                        <p className='a-p'>
                        Rowell Ranch Rodeo Park is located off highway 580, between Castro Valley and Dublin.
                        </p>
                        <p className='a-read-more-link'>
                        <ReadMoreButton href='#' style='read-more-dark' content='Read More'/>
                        </p>
                    </div>
                    <div className='card-container1'>
                        <div className='card img1' ref={el => (cardRefs.current[0] = el)} />
                        <div className='card img2' ref={el => (cardRefs.current[1] = el)} />
                    </div>
                </div>
                <div className='s-sec3'>
                    <Schedule scheduledEvents={scheduledEvents} />
                    <Carousel scheduledEvents={scheduledEvents} />
                </div>
            </section>
        </>
    );
}
