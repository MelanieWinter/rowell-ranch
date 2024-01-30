import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
    return (
        <main className='Hero' id='Hero'>
            <div>
                <h1>WELCOME RODEO FANS</h1> 
                {/* make this a param */}
                <div className='spans'>
                    <span className='orange-span'>
                        <FontAwesomeIcon icon={faLocationDot} /> Rowell Ranch Rodeo
                    </span>
                    <span className='white-span'>
                    9725 Dublin Canyon Rd, Castro Valley, CA 94552
                    </span>
                    {/* make these params */}
                </div>
            </div>
            {/* <button className='scroll-down'><FontAwesomeIcon icon={faAngleDown} /></button> */}
        </main>
    );
}
