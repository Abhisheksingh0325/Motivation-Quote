const quotes = [
    "Believe you can and you're halfway there. -Theodore Roosevelt",
    "Don't watch the clock; do what it does. Keep going. -Sam Levenson",
    "The only way to do great work is to love what you do. -Steve Jobs",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. -Christian D. Larson",
    "The only limit to our realization of tomorrow will be our doubts of today. -Franklin D. Roosevelt",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. -Roy T. Bennett",
    "You are never too old to set another goal or to dream a new dream. -C.S. Lewis",
    "Your time is limited, don't waste it living someone else's life. -Steve Jobs"
];

function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = quotes[randomIndex];
}

const generateButton = document.getElementById('generate');
generateButton.addEventListener('click', generateRandomQuote);

// Initial quote generation on page load
generateRandomQuote();
