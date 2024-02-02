import { useState } from 'react';
import ReadMoreButton from '../ReadMoreButton/ReadMoreButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Carousel.css'

const carouselTexts = [
    {
        header: "Rockin' Bull Bash",
        text: "Watch professional bull riding at Rowell Ranch Rodeo’s Rockin’ Bull Bash! You’ll be amazed as you watch some of the toughest cowboys as they bravely ride some of the toughest bulls on the circuit!",
        header2: "Friday Schedule",
        text2: `
            5:30 PM Gates Open
            6:15 PM Tour Begins
            7:30 PM Bull Riding
        `,
        header3: "Location",
        text3: `
            Rowell Ranch Rodeo Park
            9725 Dublin Canyon Rd,
            Castro Valley, CA 94552
        `
    },
    {
        header: "Rowell Ranch Pro Rodeo (Saturday)",
        text: "Saturday’s rodeo is Armed Forces Day. Help honor member’s of our military. Saturday is also when we hold our Special Partners event.",
        header2: "Saturday Schedule",
        text2: `
            10:00 AM Gates Open
            10:30 AM Special Partners Event*
            12:00 PM Cowboy Experience**
            1:30 PM Rodeo Grand Entry
            5:00 PM Tri-Tip BBQ & live music
        `,
        header3: "Location",
        text3: `
            Rowell Ranch Rodeo Park
            9725 Dublin Canyon Rd,
            Castro Valley, CA 94552
        `,
        subtext: `
        *Special Partners Event is for children with special challenges. Click HERE for more information.
        **The Cowboy Experience is a fun event for children where they learn about the rodeo from cowboys in the arena.
        `
    },
    {
        header: "Rowell Ranch Pro Rodeo (Sunday)",
        text: "Sunday’s rodeo is Tough Enough to Wear Pink day. Join us in our dedication to fighting breast cancer.",
        header2: "Sunday Schedule",
        text2: `
            10:00 AM Gates Open
            12:00 PM Cowboy Experience**
            1:30 PM Rodeo Grand Entry
        `,
        header3: "Location",
        text3: `
            Rowell Ranch Rodeo Park
            9725 Dublin Canyon Rd,
            Castro Valley, CA 94552
        `,
        subtext: `
            *Special Partners Event is for children with special challenges. Click HERE for more information.
            **The Cowboy Experience is a fun event for children where they learn about the rodeo from cowboys in the arena.
        `
    },
    {
        header: "Parade",
        text: "Parade Registration for 2023 closes Wednesday, May 10. Come out to view the parade Saturday, May 13 at 10 am on Castro Valley Blvd",
    },
    {
        header: `
            Cecil Jones Cowboy Challenge
            Bbq & Dance
        `,
        text: "Rodeo week kicks off with Cecil Jones Cowboy Challenge and our highly anticipated BBQ & Dance!",
        header2: "Wednesday Schedule",
        text2: `
            4:00 PM Cecil Jones Cowboy Challenge
            6:00 PM BBQ & Dance
        `,
        header3: "Location for both events",
        text3: `
            Rowell Ranch Rodeo Park
            9725 Dublin Canyon Rd,
            Castro Valley, CA 94552
        `,
        subtext: `
            *Entry to compete in Cecil Jones Cowboy Challenge is $150 per teams of three, and includes entry to the BBQ. Anyone can participate. You pick your team(s). Event is open to the first thirty teams.

            To enter your team, please contact:
            Janet Lemmons at 510-581-2577
        `
    },
    {
        header: "Cowgirl Picnic",
        text: "The annual Cowgirl Picnic is a ladies only luncheon that honors the cowgirls in our community. This fun event take place at Rowell Ranch Rodeo Park’s Earl Dawes Picnic Area, and starts at 11:00 AM. It’s a time for the ladies to come together and celebrate the cowgirl spirit, with the added bonus of being served and pampered by professional local cowboys, ranchers, and firefighters!",
        header2: "Thursday Schedule",
        text2: `
            11:00 AM Cowgirl Picnic*
            5:00 PM Team Roping
        `,
        header3: "Location",
        text3: `
            Rowell Ranch Rodeo Park
            9725 Dublin Canyon Rd,
            Castro Valley, CA 94552
        `,
        subtext: `
            *For more information on Cowgirl Picnic or Cowgirl Spirit Scholarship program contact us at:

            RowellRanchRodeo@aol.com
            (510) 581-2577
        `
    },
    {
        header: "Team Roping",
        text: "What is Team Roping? Team roping is a rodeo event that features a steer and two riders. The first roper is referred to as the “header”, the person who ropes the front of the steer, usually around the horns. The second roper is the “heeler”, who ropes the steer by both its hind feet, with a five-second penalty assessed if only one leg is caught. Team roping is the only rodeo event where men and women compete equally together in professionally sanctioned competition, in both single-gender or mixed-gender teams. Cowboys originally developed this technique as a way to restrain animals on the range. Over the years, as the sport has grown, a numbering system was added to rate ropers talent level. The numbers go from one to nine (1-9) for headers and one to ten (1-10) for heelers.",
        header2: "Thursday Schedule",
        text2: `
            11:00 AM Cowgirl Picnic
            5:00 PM Team Roping (Free)
        `,
        header3: "Location",
        text3: `
            Rowell Ranch Rodeo Park
            9725 Dublin Canyon Rd,
            Castro Valley, CA 94552
        `,
        subtext: `
            For more information contact:
            Rowell’s Saddlery
            510-581-2577
        `
    },
    {
        header: "Special Partners",
        text: "The Rowell Ranch Rodeo is pleased to announce our annual Special Partners Rodeo. This event will be limited to 40 local children with mental or physical challenges between the ages of 4 and 17, and their family members limited to no more than 5. All will be guests of the Rowell Ranch Rodeo for a day of western style family fun. Our mission is to help inspire greatness in special children as they become cowboys and cowgirls for the day.",
        header2: "Saturday Schedule",
        text2: `
            10:30 AM during Saturday’s rodeo
        `,
        header3: "Location",
        text3: `
            Rowell Ranch Rodeo Park
            9725 Dublin Canyon Rd,
            Castro Valley, CA 94552
        `,
        subtext: `
            For more information, to participate, or become a Special Partner sponsor, please contact:

            Rowell’s Saddlery
            510-581-2577
        `
    },
];

export default function Carousel() {
    const [activeItem, setActiveItem] = useState(0);

    const handlePrevClick = () => {
        setActiveItem((prevItem) => (prevItem - 1 + carouselTexts.length) % carouselTexts.length);
    };

    const handleNextClick = () => {
        setActiveItem((prevItem) => (prevItem + 1) % carouselTexts.length);
    };

    return (
        <div className='Carousel'>
            <div className='nc-content'>
                <h2 className='nc-h2'>{carouselTexts[activeItem].header}</h2>
                <p className='nc-p'>{carouselTexts[activeItem].text}</p>
                <h3 className='nc-p'>{carouselTexts[activeItem].header2}</h3>
                <p className='nc-p'>{carouselTexts[activeItem].text2}</p>
                <h3 className='nc-p'>{carouselTexts[activeItem].header3}</h3>
                <p className='nc-p'>{carouselTexts[activeItem].text3}</p>
                <p className='nc-p'>{carouselTexts[activeItem].subtext}</p>
                <p className='nc-p-a'>
                    <ReadMoreButton href='#' style='read-more-light' content='Read More' />
                </p>
            </div>
            <div className='c-buttons'>
                <button onClick={handlePrevClick} className='c-b-btn'>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button onClick={handleNextClick} className='c-b-btn'>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
}
