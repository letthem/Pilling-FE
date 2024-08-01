import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./reset.css";
import Home from "./pages/Home/index.js";
import NotFoundPage from "./pages/NotFoundPage.js";
import AuthKakao from "./pages/AuthKakao.js";
import Calendar from "./pages/Calendar/index.js";
import Profile from "./pages/Profile/index.js";
import Setting from "./pages/Profile/Setting/index.js";
import Scrap from "./pages/Profile/Scrap/index.js";
import Record from "./pages/Profile/Record/index.js";
import Join from "./pages/Login/Join.js";
import StartPage from "./pages/StartPage/StartPage.js";
import Login from "./pages/Login/index.js";
import Map from "../src/pages/Map";
import Find from "../src/pages/Find/index.js";
import FindResultPage from "./pages/Find/FindResultPage/index.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/redirect/auth/kakao" element={<AuthKakao />} /> // Redirect URL
          <Route path="/join">
            <Route index element={<Join />} />
            <Route path="start" element={<StartPage />} />
          </Route>
          <Route path="/home">
            <Route index element={<Home />} />
            <Route path="find">
              <Route index element={<Find />} />
              <Route path=":itemName" element={<FindResultPage />} />
            </Route>
          </Route>
          <Route path="/map" element={<Map />} />
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
