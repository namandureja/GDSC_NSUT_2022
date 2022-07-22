import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Home, Events, Contact, Feed, Team } from "./Pages";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/feed" element={<Feed />} />
                    <Route path="*" element={<Navigate to="/" replace={true} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
