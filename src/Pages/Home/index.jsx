import "./home.css";
import FrontSection from "./FrontSection";
import WWDSection from "./WWDSection";
import EFPSection from "./EFPSection";
import ContactsSection from "./ContactsSection";
import Footer from "../../Components/Footer/Footer";

export default function Home() {
  return (
    <>
      <FrontSection />
      <WWDSection />
      <EFPSection />
      <ContactsSection />
      <Footer />
    </>
  );
}