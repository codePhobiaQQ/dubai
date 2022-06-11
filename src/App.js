import { Route, Routes, Link } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import React from "react";
import ResultPage from "./pages/ResultPage";
import DetailPage from "./pages/DetailPage";
import ConfirmPay from "./pages/ConfirmPay";
import MyStays from "./pages/MyStays";
import MyStay from "./pages/MyStay";
import MyStayResult from "./pages/MyStayResult";
import DetailsPageNew from "./pages/DetailsPageNew";

function App() {
  return (
    <>
      <div className="App">
      </div>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/details" element={<DetailPage />} />
        <Route path="/details-new" element={<DetailsPageNew />} />
        <Route path="/confirm-pay" element={<ConfirmPay />} />
        <Route path="/my-stays" element={<MyStays />} />
        <Route path="/no-stay" element={<MyStay />} />
        <Route path="/my-stays-result" element={<MyStayResult />} />
      </Routes>
    </>
  );
}

export default App;
