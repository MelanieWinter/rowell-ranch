import Hero from '../../components/Hero/Hero'
import './AboutUs.css'

export default function AboutUs() {
    return (
        <>
            <Hero
                title='About Us'
                orange='Rowell Ranch Rodeo'
                white='9725 Dublin Canyon Rd, Castro Valley, CA 94552'
                backgroundImage={'./assets/splash-hero.jpeg'}
            />
            <section className='AboutUs'>
                <div className='au'>
                    <div>
                        <h2>ABOUT ROWELL RANCH RODEO</h2>
                        <p>
                            First hosted by Harry Rowell “The Rodeo King of the West” over 90 years ago, the Rowell Ranch Rodeo has provided the community with the opportunity to experience the historical sport of rodeo.
                            <br /><br />
                            Today, the Rowell Ranch Rodeo is operated by a local non-profit organization continuing the traditional community events. The rodeo partners with many local non-profit organizations to help raise funds for a wide range of local charitable causes.
                            <br /><br />
                            Join us on the 3rd weekend in May for the historic patriotic launch of the Rowell Ranch Rodeo when a lone rider gallops from Harry’s Hills into the arena ring carrying the American Flag.
                        </p>
                    </div>
                    <div>
                        <h2>THE CECIL JONES ARENA</h2>
                        <p>
                            Pro Rodeo Hall of Fame inductee, Cecil Jones, was honored on May 15, 2010, for his long service to the Rowell Ranch Rodeo Assoc., when the Rowell Ranch Rodeo Board named their arena “The Cecil Jones Arena.” The ceremony took place during the main performance.
                            <br /><br />
                            Cecil, born in Idaho, in 1917, rode as a competitor in 1939, riding bareback horses and saddle broncs. He moved with his wife, Fan, to California in 1946 and settled in a little house on Harry and Maggie Rowell’s ranch. While being ranch manager for Harry, Cecil found time to manage and later own Rowell’s Saddlery. Rowell’s Saddlery is still in operation and now owned by Janet Lemmons.
                            <br /><br />
                            Cecil has distinguished himself locally, nationally and internationally through his participation in the military and with the Professional Rodeo Cowboy Association. With championships from Sydney Australia to Madison Square Garden and all across the western United States. While still in the military in World War II, he helped organize and stage an all G.I. rodeo in Tokyo, Japan.
                            <br /><br />
                            Cecil has served on the Rowell Ranch Rodeo Committee for over 49 years, serving as its president for 25 years. Through all his accomplishments and travels, Cecil still calls Rowell Ranch his home.
                        </p>
                    </div>
                    <div>
                        <h2>OUR HISTORY</h2>
                        <p>
                            Don Guillermo Castro is recognized as presenting the first rodeos in Hayward during the early 1800s in what is now the Hayward Library Park. Every Spring, the gathering, doctoring, and branding of Longhorn cattle also provided for Native American and Mexican cowboys to exhibit their skills in many competitive activities at the conclusion of each spring gathering.
                            <br /><br />
                            In 1921, Harry Rowell, a rancher, businessman and philanthropist, revived the historical sport of rodeo on the athletic fields of the Burbank School in downtown Hayward. In 1925, Harry produced his first rodeo at his Dublin Canyon ranch, the current site of the Rowell Ranch Rodeo Park.
                            <br /><br />
                            Rowell eventually became known as the biggest rodeo stock contractor in the West, supplying rodeos with cows and other animals for their events.
                            <br /><br />
                            In 1941, he was the stock provider and also the arena director for the Bay Area’s very first Grand National Rodeo, which was held at the Cow Palace. He continued in that capacity until 1952. Over the years, he was a cattleman who showcased his stock at 25 different rodeos that he promoted throughout the West, which included the annual rodeo at his own Rowell Ranch.
                            <br /><br />
                            Once again, the Rowell Ranch Rodeo and the Junior Rodeo continue in recognition and honor of Harry and Maggie Rowell, who were inducted posthumously into the National Cowboy Hall of Fame and Western Heritage Center in Oklahoma City. Harry is also in the Professional Rodeo Cowboys Association Hall of Fame in Colorado Springs.
                        </p>
                    </div>
                    <div>
                        <h2>BOARD OF DIRECTORS</h2>
                        <p>
                            Russ Fields, President
                            <br />Bud Critzer, Vice President, Emeritus
                            <br />Guy Warren, Secretary
                            <br />George Pacheco, Treasurer
                            <br />Janet lemmons
                            <br />Paul Martin
                            <br />Brian Morrison
                            <br />Joe Paulo
                        </p>
                    </div>
                    <div>
                        <h2>ADVISORY BOARD</h2>
                        <p>
                            In addition to the Board of Directors, we have 30+ members of the RRR Advisory Board who dedicate their time and resources throughout the year to ensure the success of our rodeo.
                        </p>
                    </div>
                    <div>
                        <h2>PHOTOGRAPHY</h2>
                        <p>
                            Phil Doyle
                            <br />Rory Churchfield, Videographer      
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}