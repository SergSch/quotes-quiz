import React from 'react';

const SingleQuote = ({ text, author }) => {
  return (
    <div>
      <p>{text}</p>
      <h3>{author}</h3>
    </div>
  );
};

export default SingleQuote;
