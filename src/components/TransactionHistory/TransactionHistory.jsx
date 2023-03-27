import "./TransactionHistory.css"
import PropTypes from 'prop-types';

export const TransactionHistory = ({items}) => {
    return (
        <section>
            <table className="transaction-history">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <th>{item.type}</th>
                            <th>{item.amount}</th>
                            <th>{item.currency}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string
        })
    )
}