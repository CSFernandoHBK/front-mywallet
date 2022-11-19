import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyles";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NewInPage from "./pages/MovementPage/NewInPage";
import NewOutPage from "./pages/MovementPage/NewOutPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

export default function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/sign-up" element={<RegistrationPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/newmovement/in" element={<NewInPage/>}/>
          <Route path="/newmovement/out" element={<NewOutPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

