import './ShoppingCart.css';
import LineItem from '../LineItem/LineItem';
import * as stripeApi from '../../utilities/stripe-api'
import formatCurrency from '../../utilities/formatCurrency'

export default function ShoppingCart({ order, handleChangeQty, handleCheckout, handleAddToOrder }) {

    if (!order) return (<h3>No items in shopping cart</h3>);

    const lineItems = order.lineItems.map(event =>
        <LineItem
            lineItem={event}
            isPaid={order.isPaid}
            handleChangeQty={handleChangeQty}
            key={event._id}
        />
    );

    return (
        <div className="ShoppingCart">
            <div className="section-heading">
                {order.isPaid ?
                <span>ORDER <span className="smaller">{order.orderId}</span></span>
                :
                <span>Shopping Cart</span>
                }
                <span>{new Date(order.createdAt).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</span>
            </div>
            <div className="line-item-container">
                {lineItems.length ?
                <>
                    {lineItems}
                    <section className="total">
                    {order.isPaid ?
                        <span className="right">TOTAL&nbsp;&nbsp;</span>
                        :
                        <button
                        className="btn-sm"
                        onClick={() => stripeApi.handleCheckoutButton(order.lineItems)}
                        disabled={!lineItems.length}
                        >CHECKOUT</button>
                    }
                    <span>{order.totalQty}</span>
                    <span className="right">{formatCurrency(order.orderTotal)}</span>
                    </section>
                </>
                :
                <div className="hungry">HOWDY</div>
                }
            </div>
        </div>
    );
}