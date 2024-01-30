import NavBar from '../../components/NavBar/NavBar'
import Hero from '../../components/Hero/Hero'
import NumberCarousel from '../../components/NumberCarousel/NumberCarousel';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import Map from '../../components/Map/Map';
import Schedule from '../../components/Schedule/Schedule';
import Footer from '../../components/Footer/Footer';
import ReadMoreButton from '../../components/ReadMoreButton/ReadMoreButton';
import './Splash.css';

export default function Splash({ user, setUser }) {
    return (
        <section className="Splash">
            <NavBar user={user} setUser={setUser} />
            <Hero />
            <section className='foreground'>
                <div className='a-nc'>
                    <NumberCarousel />
                    <VideoPlayer />
                </div>
                <div className='map-area'>
                    <div className='map-api'>
                        <Map />
                    </div>
                    <div className='a-ma-text'>
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
                </div>
                <div className='a-events'>
                    <Schedule />
                </div>
            </section>

            {/* <AdminPortal setUser={setUser}/> */}
            <Footer />
        </section>
    );
}
