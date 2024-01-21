import React, { useState } from 'react';
import { quotes } from './../../utils/quotes.js';
import { Link } from 'react-router-dom';
import classes from './QuotesPage.module.css';
import SingleQuote from './SingleQuote/SingleQuote.jsx';

const QuotesPage = () => {
  const [quotesList, setQuoteList] = useState(quotes);
  const [quote, setQuote] = useState(quotesList[0]);

  const quotesHandler = () => {
    let newQuote = Math.floor(Math.random() * quotesList.length);
    setQuote(quotesList[newQuote]);
  };

  return (
    <div>
      <div className={classes.wrapper}>
        <SingleQuote {...quote} />
        <button className={classes.btn} onClick={quotesHandler}>
          Next
        </button>
      </div>
      <div>
        <Link to={'/'} className="link">
          Home
        </Link>
      </div>
    </div>
  );
};

export default QuotesPage;
