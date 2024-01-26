import { useState } from 'react';
import './NumberCarousel.css';

const carouselTexts = [
    {
        header: 'ROCKIN’ BULL BASH!',
        text: 'You’ll be amazed as you watch some of the toughest cowboys as they bravely ride some of the toughest bulls on the circuit!',
    },
    {
        header: 'PARADE',
        text: 'Here is where you will find important information about: -when things are happening -where things are happening -where not to park! Please drive safely!',
    },
    {
        header: 'BBQ & DANCE',
        text: 'Rodeo week kicks off with Cecil Jones Cowboy Challenge and our highly anticipated BBQ & Dance!',
    },
    {
        header: 'COWGIRL PICNIC',
        text: 'The annual Cowgirl Picnic is a ladies only luncheon that honors the cowgirls in our community. ',
    },
];

export default function NumberCarousel() {
    const [activeItem, setActiveItem] = useState(0);
    const handleItemClick = (index) => {
        setActiveItem(index);
    };

    return (
        <main className='NumberCarousel' anchor='Hero'>
        <div className='carousel-content'>
            <h2>{carouselTexts[activeItem].header}</h2>
            <p className='p'>{carouselTexts[activeItem].text}</p>
            <p className='read-more-link'>
            <a href="#">READ MORE</a>
            </p>
        </div>
        <ul>
            {Array.from({ length: 4 }, (_, index) => (
            <li
                key={index}
                className={index === activeItem ? 'nc-active' : ''}
                onClick={() => handleItemClick(index)}
            >
                {`0${index + 1}`}
            </li>
            ))}
        </ul>
        </main>
    );
}
