import Hero from '../../components/Hero/Hero'
import './GetInvolved.css'

export default function GetInvolved() {
    return (
        <>
        <Hero
                title='Get Involved'
                orange='Rowell Ranch Rodeo'
                white='9725 Dublin Canyon Rd, Castro Valley, CA 94552'
                backgroundImage={'./assets/splash-hero.jpeg'}
            />
        <section className='GetInvolved'>
            <div className='gi'>
                <div>
                    <h2>INTERNSHIPS</h2>
                    <p>
                        In our goal to keep the liveliness of rodeos strong in our community, the Rowell Ranch Rodeo is seeking the assistance of individuals who are interested in gaining work experience, skill refinement, exploring a new career path in event management and other related areas. Or maybe just interested in network with a variety of professionals from around our community. If this sounds like you, check out some of our internship opportunities below. Please fill out the intake form and someone will be sure to reach out soon.
                    </p>
                </div>
                <div>
                    <h2>SPONSORSHIP</h2>
                    <p>
                        Once existing as a mere dream in the mind of a young boy from England, Harry Rowell immigrated to the United States to realize his vision and subsequently created our local treasure – the Rowell Ranch Rodeo. We strive to preserve the iconic image of the American west; the image of America our founder fancied, and the catalyst that ultimately promoted him to leave his native country.
                        <br /><br />
                        Your support is critical to preserving our history for future generations, and we are honored by your loyalty. For those of you who are new to the Rowell Ranch Rodeo, we hope you have found an interest in our western heritage and look forward to seeing you this May.
                        <br /><br />
                        If you are interested in helping support our mission, we have provided our sponsorship and advertising information for download. Please submit the questionnaire below and someone from our Sponsorship Committee will be in touch with you shortly.
                    </p>
                </div>
                <div>
                    <h2>VOLUNTEER</h2>
                    <p>
                        Want to make a difference in the western community, meet new people and have a fun time? Join our Rowell Ranch Rodeo family in carrying on the tradition of the historic sport of rodeo by becoming a volunteer. The Rowell Ranch Rodeo would not be nearly as successful without the vision, dedication and hard work of its volunteers.
                        <br /><br />
                        Individuals can submit a volunteer application anytime and often find unique day-of or year-round opportunities that meet their desired impact and areas of interest. Please fill out the questionnaire below and email a signed copy of our Release of Liability to our Volunteer Coordinator: Patti Ising| Patinliv@aol.com
                    </p>
                </div>
                <div>
                    <h2>VENDORS</h2>
                    <p>
                        Thank you for your interest in purchasing a vendor spot at Rowell Ranch Rodeo! Your presence adds to our local culture and is greatly appreciated.
                        <br /><br />
                        The 2024 Vendor Applications is on it’s way. Please check back soon!
                    </p>
                </div>
            </div>
        </section>
    </>
    )
}

// TODO: Makes forms