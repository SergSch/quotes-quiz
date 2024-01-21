import React from 'react';
import { Link } from 'react-router-dom';
import classes from './HomePage.module.css';
import QuizPage from '../QuizPage.jsx/QuizPage';
import QuotesPage from '../QuotesPage/QuotesPage';

const HomePage = () => {
  return (
    <div className={classes.home}>
      <Link to={'/quotes'} className="link">
        <p style={{ textDecoration: 'none' }}>Quotes</p>
      </Link>
      <Link to={'/quiz'} className="link">
        <p>Quiz</p>
      </Link>
    </div>
  );
};

export default HomePage;
