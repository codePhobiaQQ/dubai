import { Route, Routes, Link } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import React from "react";
import ResultPage from "./pages/ResultPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <>
      <div className="App">
      </div>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/details" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
