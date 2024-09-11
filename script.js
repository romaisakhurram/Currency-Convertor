const currency = {
    PKR: 1, //based currency
    USD: 0.0036,
    IND: 0.30,
    EUR: 0.0034,
    GBP: 0.0029,
    AUD: 0.0056,
    CAD: 0.0049,
};


document.getElementById("Convertor-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    let fromCurrency = document.getElementById("from").value; //exchange rate
    let toCurrency = document.getElementById("to").value; // exchange rate
    let amount = document.getElementById("amount").value;

    let fromAmount = currency[fromCurrency];
    let toAmount = currency[toCurrency];
    let baseAmount = amount / fromAmount;
    let convertedAmount = baseAmount * toAmount;
    document.getElementById("result").textContent = `convertedAmount:${Math.round(convertedAmount)}`;
});
