import formatCurrency from '../../utilities/formatCurrency';
import './LineItem.css';

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
  console.log(lineItem);
  return (
    <div className="LineItem">
      <div className="li-title-div">
        <span className="align-ctr">{lineItem.event.title}</span>
        <span>{formatCurrency(lineItem.event.price)}</span>
      </div>
      <div className='li-right'>
        <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
          {!isPaid &&
            <button
              className="btn-xs"
              onClick={() => handleChangeQty(lineItem.event._id, lineItem.qty - 1)}
            >
              −
            </button>
          }
          <span>{lineItem.qty}</span>
          {!isPaid &&
            <button
              className="btn-xs"
              onClick={() => handleChangeQty(lineItem.event._id, lineItem.qty + 1)}
            >
              +
            </button>
          }
        </div>
        <div className='ext-price'>{formatCurrency(lineItem.extPrice)}</div>
      </div>
    </div>
  );
}