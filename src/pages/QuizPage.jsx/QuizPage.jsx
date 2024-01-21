import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { questions } from './../../utils/questions.js';
import classes from './QuizPage.module.css';

const QuizPage = () => {
  const [questionList, setQuestionsList] = useState(questions);
  const [playBtn, setPlayBtn] = useState(false);
  const [singleQuestion, setSingleQuestion] = useState(questionList[0]);
  let [questionCounter, setQuestionCounter] = useState(1);
  const [questionBtn, setQuestionBtn] = useState(false);
  let [answersCounter, setAnswersCounter] = useState(0);
  let [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const buttonHandler = () => {
    setPlayBtn(true);
  };

  const playButtonToFalse = () => {
    setPlayBtn(false);
    setQuestionBtn(false);
    setSingleQuestion(questionList[0]);
    setQuestionCounter(1);
  };

  const questionHandler = () => {
    setInputValue('');
    const currentQuestion = questionList[questionCounter - 1];
    if (!currentQuestion) {
      setQuestionBtn(true);
      return;
    }

    let currentIndex = currentQuestion.options.indexOf(
      currentQuestion.correctAnswer
    );
    let newCurrentIndex = currentIndex + 1;

    if (newCurrentIndex === +inputValue) {
      setAnswersCounter((prevCounter) => prevCounter + 1);
    }

    if (questionCounter < questionList.length) {
      setSingleQuestion(questionList[questionCounter]);
      setQuestionCounter(questionCounter + 1);

      inputRef.current.focus();
    } else {
      setQuestionBtn(true);
    }
  };

  return (
    <div>
      <div className={classes.wrapper}>
        <button
          style={{ display: playBtn ? 'none' : '' }}
          onClick={() => {
            buttonHandler();
            setAnswersCounter(0);
          }}
        >
          PLAY
        </button>
        <div style={{ display: playBtn ? '' : 'none' }}>
          <div style={{ display: questionBtn ? 'none' : '' }}>
            <p>{`Question No ${questionCounter}. ${singleQuestion.question}`}</p>
            <ol>
              {singleQuestion.options.map((elem, i) => (
                <li key={elem}>{elem}</li>
              ))}
            </ol>
            <input
              ref={inputRef}
              type="text"
              name="val"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
          </div>
          <button
            style={{ display: questionBtn ? 'none' : '', marginTop: '30px' }}
            onClick={questionHandler}
          >
            Next Question
          </button>
          <p
            style={{ display: questionBtn ? '' : 'none' }}
          >{`Your result: ${answersCounter}/${questionList.length}`}</p>
          <div style={{ display: questionBtn ? '' : 'none' }}>
            <button onClick={playButtonToFalse}>Play again</button>
          </div>
        </div>
      </div>
      <div>
        <Link to={'/'} className="link">
          Home
        </Link>
      </div>
    </div>
  );
};

export default QuizPage;
