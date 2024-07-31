import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./reset.css";
import Home from "./pages/Home/index.js";
import NotFoundPage from "./pages/NotFoundPage.js";
import AuthKakao from "./pages/AuthKakao.js";
import Join from "./pages/Login/Join.js";
import StartPage from "./pages/StartPage/StartPage.js";
import Login from "./pages/Login/index.js";
import Calender from "./pages/Calender/index.js";
import Map from '../src/pages/Map'
import Profile from "./pages/Profile/index.js";
import Find from '../src/pages/Find/index.js'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/auth/kakao" element={<AuthKakao />} /> // Redirect URL
          <Route path="/join">
            <Route index element={<Join />} />
            <Route path="start" element={<StartPage />} />
          </Route>
          <Route path="/home" element={<Home />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/map" element={<Map />} />
          <Route path="/profile" element ={<Profile />} />
          <Route path="/find" element={<Find />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
