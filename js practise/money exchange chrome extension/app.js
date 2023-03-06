const apiKey = 'YOUR_API_KEY';
const endpoint = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;

const convertButton = document.getElementById('convert');
const resultDiv = document.getElementById('result');

convertButton.addEventListener('click', (e) => {
	e.preventDefault();
	const fromCurrency = document.getElementById('from').value;
	const toCurrency = document.getElementById('to').value;
	const amount = document.getElementById('amount').value;

	fetch(endpoint)
  const apiKey = 'YOUR_API_KEY';
const endpoint = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;

const convertButton = document.getElementById('convert');
const resultDiv = document.getElementById('result');

convertButton.addEventListener('click', (e) => {
	e.preventDefault();
	const fromCurrency = document.getElementById('from').value;
	const toCurrency = document.getElementById('to').value;
	const amount = document.getElementById('amount').value;

	fetch(endpoint)
		.then(response => response.json())
		.then(data => {
			const exchangeRate = data.rates[toCurrency] / data.rates[fromCurrency];
			const convertedAmount = (amount * exchangeRate).toFixed(2);
			resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
		})
		.catch(error => {
			console.error(error);
			resultDiv.textContent = 'An error occurred. Please try again later.';
		});
});

		
