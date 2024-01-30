const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {currency: 'USD', style: 'currency' })

export default function formatCurrency(pennies) {
    const dollars = pennies / 100; 
    return CURRENCY_FORMATTER.format(dollars);
}