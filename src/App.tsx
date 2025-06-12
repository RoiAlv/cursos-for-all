import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import UserList from "./pages/UserList";
import Navbar from "./components/Navbar";
import OffertList from "./pages/OfferList";
import OfferDetail from "./pages/OfferDetail";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import QuejaForm from "./pages/QuejaForm";
import QuejaList from "./pages/QuejasList";
import Contact from "./pages/Contact";
import entrada from "./assets/entrada.jpg"
import Cart from "./pages/Cart";

function App() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${entrada})` }}
    >
      <div className="relative z-10 bg-white/80 dark:bg-black/60 min-h-screen">
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <Toaster position="top-center" reverseOrder={false} />
            <div className="flex grow justify-center items-center">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/userList" element={<UserList />} />
                <Route path="/offers" element={<OffertList />} />
                <Route path="/offers/:id" element={<OfferDetail />} />
                <Route path="/feedback" element={<QuejaForm />} />
                <Route path="/feedbackList" element={<QuejaList />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
