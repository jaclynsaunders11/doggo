import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calendar from './components/calendar/Calendar';

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* TODO: implement calendar */}
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


