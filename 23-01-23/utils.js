const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const QuoteCardEl = (data) => {
    const cardEl = cE("div");
    const quoteEl = cE("p");
    const authorEl = cE("p");

    cardEl.className = "quote-card";
    quoteEl.textContent = data.quote;
    authorEl.textContent = data.author;

    cardEl.append(quoteEl, authorEl);
    return cardEl;

};

QuoteCardEl.className = "quote-card"

export {cE, qS, QuoteCardEl};