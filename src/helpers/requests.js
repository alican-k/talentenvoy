const url = 'https://talaikis.com/api/quotes/random/'

export const randomQuote = () => 
	fetch(url).then(res => res.json())