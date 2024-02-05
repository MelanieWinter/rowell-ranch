import formatCurrency from '../../utilities/formatCurrency';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './EventsListItem.css';

export default function EventsListItem({ eventItem, handleAddToOrder }) {
    const gradientStyle = {
        backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '15px',
    };

    return (
        <div className='EventsListItem' style={{ backgroundImage: `url(${eventItem.image})`, position: 'relative' }}>
            <div style={gradientStyle} className='eli-gradient'></div>

            <div className="eli-title">{eventItem.title}</div>
            <div className="eli-buy">
                <span>{formatCurrency(eventItem.price)}</span>
                <button
                    className="eli-btn"
                    onClick={() => handleAddToOrder(eventItem._id)}
                >
                    <FontAwesomeIcon icon={faPlus} />
                </button>

            </div>
        </div>
    );
}
