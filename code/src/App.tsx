import { BrowserRouter, Routes, Route } from "react-router-dom";

import TrackerPage from './pages/TrackerPage';
import AnalyticsPage from './pages/AnalyticsPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route path="tracker" element={<TrackerPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
