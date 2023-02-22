
/**
 * @returns {Promise<Object> } quote information
 */

const fetchQuote = async() => {

    const resp = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await resp.json();

    return data[0];

}

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const BreackingBadApp = async( element ) => {

    document.querySelector('#app-title').innerHTML = 'Breakingbad App';
    element.innerHTML = 'Loading...';

    // await fetchQuote();

    const quoteLabel = document.createElement('blockquote');
    const authLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = ( data ) => {

        quoteLabel.innerHTML = data.quote;
        authLabel.innerHTML = data.author
        element.replaceChildren( quoteLabel, authLabel, nextQuoteButton);
    }


    // Añador listener
    nextQuoteButton.addEventListener('click', async() => {
        element.innerHTML = 'Loading...';
        const quote = await fetchQuote();
        renderQuote( quote )

    })

    fetchQuote()
        .then( renderQuote)

    
}