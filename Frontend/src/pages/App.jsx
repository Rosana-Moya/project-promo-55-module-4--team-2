import 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import ListPage from './ListPage';
import DetailPage from './DetailPage';
import '../styles/app.css';

const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/list-page" element={<ListPage />} />
      <Route path="/detail-page/:id" element={<DetailPage />} />
    </Routes>
  );
};

export default App;
