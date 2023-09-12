import Home from "./components/home/Home";
import Header from "./components/header/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./components/footer/ContactUs";
import MyAppointments from "./components/appointments/MyAppointments";
function App() {
  return (
    <div className="bg_desing">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/my_appointments" element={<MyAppointments />} />
          <Route exact path="/contact_us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
