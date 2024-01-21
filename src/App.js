import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import QuizPage from './pages/QuizPage.jsx/QuizPage';
import QuotesPage from './pages/QuotesPage/QuotesPage';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Hi!</h1>
        <p>{new Date().toLocaleString()}</p>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quotes" element={<QuotesPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </div>
  );
}

export default App;
