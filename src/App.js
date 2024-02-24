import './App.css';
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookingPage from "./components/BookingPage";
import CallToAction from "./components/CallToAction"
import CustomerSay from './components/CustomerSay';
import Specials from './components/Specials';
import NewZealand from './components/NewZealand';
import Home from './components/Home';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/bookingPage" element={<BookingPage />} />
            <Route path="/callToAction" element={<CallToAction />} />
            <Route path="/customerSay" element={<CustomerSay />} />
            <Route path="/speacials" element={<Specials />} />
            <Route path="/about" element={<NewZealand />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
