import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./reset.css";
import Home from "./pages/Home.js";
import NotFoundPage from "./pages/NotFoundPage.js";
import AuthKakao from "./pages/AuthKakao.js";
import Login from "./pages/Login.js";
import Calendar from "./pages/Calendar/index.js";
import Profile from "./pages/Profile/index.js";
import Setting from "./pages/Profile/Setting/index.js";
import Scrap from "./pages/Profile/Scrap/index.js";
import Record from "./pages/Profile/Record/index.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/kakao" element={<AuthKakao />} />
          <Route path="/login" element={<Login />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/profile">
            <Route index element={<Profile />} />
            <Route path="setting" element={<Setting />} />
            <Route path="scrap" element={<Scrap />} />
            <Route path="record" element={<Record />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
