import { useState } from 'react';
import ReadMoreButton from '../ReadMoreButton/ReadMoreButton';
import './NumberCarousel.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const carouselTexts = [
    {
        header: 'Plan Your Gathering With Us',
        text: "Embark on a journey through over 90 years of rodeo history at Rowell Ranch Rodeo, founded by the legendary Harry Rowell. Choose our venue for a unique blend of tradition and community engagement, with proceeds supporting local charities. Join us for a memorable event that echoes the spirit of the West and celebrates the enduring legacy of Rowell Ranch Rodeo. Book now and be part of the history!",
    },
    {
        header: 'Caring for Our Four-Legged Stars',
        text: "Committed to animal safety, Rowell Ranch Pro Rodeo, with its century-long legacy, prioritizes the well-being of our cherished participants. Upholding over 70 rules governing livestock care, we ensure the health of our animal athletes. Despite concerns raised after the 2019 event, our committee followed all welfare laws, ensuring the well-being of our livestock.",
    },
    {
        header: 'Saddle Up for Impact',
        text: 'Do you have a passion for the western community, enjoy meeting new people, and want to have a blast while making a difference? Join the Rowell Ranch Rodeo family and become a crucial part of upholding the historic tradition of rodeo as a volunteer. Our success relies heavily on the vision, dedication, and hard work of our volunteers. To get started, please fill out the questionnaire by clicking the link below.',
    },
    {
        header: 'Preserving A Legacy',
        text: "Join us in preserving the legacy of Rowell Ranch Rodeo—born from the dream of a young English boy who ventured to the United States to create an enduring symbol of the American West. Your support is crucial in safeguarding this history for future generations. To support our mission, download our sponsorship and advertising information, and complete the questionnaire by clicking the link below.",
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
                <p className='nc-p-a'>
                    <ReadMoreButton href='#' style='read-more-light' content='Read More' />
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
            {/* <button className='scroll-down'><FontAwesomeIcon icon={faAngleDown} /></button> */}
        </main>
    );
}
