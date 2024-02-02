import './Hero.css';

export default function Hero({ user, title, orangeIcon, orange, white, backgroundImage }) {
    const style = {
        backgroundImage: `url(${backgroundImage})`
    };

    return (
        <section className='Hero' id='Hero'>
            <div className='hero-div' style={style}>
                <div className='hero-div2'>
                    <h1>{title}</h1> 
                    <div className='spans'>
                        <span className='orange-span'>
                            {orangeIcon} {orange}
                        </span>
                        <span className='white-span'>
                            {white}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}


// TODO: make this modular