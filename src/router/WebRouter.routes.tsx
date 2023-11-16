import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../components/App/App";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
