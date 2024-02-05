import './SponsorCard.css';

export default function SponsorCard({ logo, name }) {
    return (
        <div className='SponsorCard'>
            <div className='sc-logo' style={{ backgroundImage: `url("${logo}")` }} />
            <div className='sc-name'>{name}</div>
        </div>
    );
}
