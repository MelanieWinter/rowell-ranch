import formatCurrency from '../../utilities/formatCurrency'
import './EventsListItem.css'

export default function EventsListItem({ eventItem, handleAddToOrder }) {
    console.log(eventItem)
    return (
        <div className='EventsListItem'>
            <div className="eli.title">{eventItem.title}</div>
            <div className="eli.buy">
                <span>{formatCurrency(eventItem.price)}</span>
                <button 
                    className="btn-sm" 
                    onClick={() => handleAddToOrder(eventItem._id)}
                >
                ADD
                </button>
            </div>
        </div>
    )
}