import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
    return (
        <main className='Hero'>
        <div>
            <h1>WELCOME RODEO FANS</h1>
            <div className='spans'>
                <span className='orange-span'>
                    <FontAwesomeIcon icon={faLocationDot} /> Rowell Ranch Rodeo
                </span>
                <span className='white-span'>
                9725 Dublin Canyon Rd, Castro Valley, CA 94552
                </span>
            </div>

        </div>
        </main>
    );
}
