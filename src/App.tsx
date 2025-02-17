
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "@/pages/Admin";
import Services from "@/pages/Services";
import Updates from "@/pages/Updates";
import UpdateView from "@/pages/UpdateView";
import Index from "@/pages/Index";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import Login from "@/pages/Login";
import CertificateVerification from "@/pages/CertificateVerification";
import AboutUs from "@/pages/AboutUs";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/updates/:id" element={<UpdateView />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/verify-certificate" element={<CertificateVerification />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
