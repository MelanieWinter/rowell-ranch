import './EventsListItem.css'

export default function EventsListItem({ eventItem, handleAddToOrder }) {
    // console.log(eventItem)
    return (
        <section className='EventsListItem'>
            <div className="eli.title">{eventItem.title}</div>
            <div className="eli.buy">
                <span>${eventItem.price.toFixed(2)}</span>
                <button className="btn-sm" onClick={() => handleAddToOrder(eventItem._id)}>
                ADD
                </button>
            </div>
        </section>
    )

}