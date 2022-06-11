import { Route, Routes, Link } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import React from "react";
import ResultPage from "./pages/ResultPage";
import DetailPage from "./pages/DetailPage";
import ConfirmPay from "./pages/ConfirmPay";
import MyStays from "./pages/MyStays";

function App() {
  return (
    <>
      <div className="App">
      </div>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/details" element={<DetailPage />} />
        <Route path="/confirm-pay" element={<ConfirmPay />} />
        <Route path="/my-stages" element={<MyStays />} />
      </Routes>
    </>
  );
}

export default App;
