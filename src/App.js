import './App.css';
import Layout from "./components/Layout.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookingPage from "./components/BookingPage.tsx";
import CallToAction from "./components/CallToAction.tsx"
import CustomerSay from './components/CustomerSay.tsx';
import Specials from './components/Specials.tsx';
import NewZealand from './components/NewZealand.tsx';
import Home from './components/Home.tsx';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="booking" element={<BookingPage />} />
            <Route path="callToAction" element={<CallToAction />} />
            <Route path="customerSay" element={<CustomerSay />} />
            <Route path="specials" element={<Specials />} />
            <Route path="about" element={<NewZealand />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
