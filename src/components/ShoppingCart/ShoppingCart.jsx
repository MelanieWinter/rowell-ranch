import './ShoppingCart.css';
import LineItem from '../LineItem/LineItem';
import * as stripeApi from '../../utilities/stripe.api'

export default function ShoppingCart({ order, handleChangeQty, handleCheckout }) {

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
        <div className="OrderDetail">
            <div className="section-heading">
                {order.isPaid ?
                <span>ORDER <span className="smaller">{order.orderId}</span></span>
                :
                <span>NEW ORDER</span>
                }
                <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
            </div>
            <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
                {lineItems.length ?
                <>
                    {lineItems}
                    <section className="total">
                    {order.isPaid ?
                        <span className="right">TOTAL&nbsp;&nbsp;</span>
                        :
                        <button
                        className="btn-sm"
                        // onClick={handleCheckout}
                        onClick={() => stripeApi.handleCheckoutButton(order.lineItems)}
                        disabled={!lineItems.length}
                        >CHECKOUT</button>
                    }
                    <span>{order.totalQty}</span>
                    {/* <span className="right">${order.orderTotal.toFixed(2)}</span> */}
                    </section>
                </>
                :
                <div className="hungry">HOWDY</div>
                }
            </div>
        </div>
    );
}