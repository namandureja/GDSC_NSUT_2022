import "./home.css";
import Section from "./Section";
import Footer from "../../Components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Section align='center' 
               img={require('../../Assets/Images/DSC-Logo.png')} 
               link="/" 
               color="#4285F4" 
               title="Google Developer Student Clubs" 
               content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta totam nostrum minima quas. Alias architecto natus optio rem, voluptatem incidunt voluptatibus dolore minima vero necessitatibus voluptatum! Dolorem neque ex minima' 
      />
      <Section align='right' 
               img={require('../../Assets/Images/home-events-img.png')} 
               link="/events" 
               color="#EA4335" 
               title="Events" 
               content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta totam nostrum minima quas. Alias architecto natus optio rem, voluptatem incidunt voluptatibus dolore minima vero necessitatibus voluptatum! Dolorem neque ex minima, ullam ducimus placeat, nesciunt odit quod itaque temporibus quas maiores.' 
      />
      <Section align='left' 
               img={require('../../Assets/Images/home-team-img.png')} 
               link="/team" 
               color="#FBBC04" 
               title="Team" 
               content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta totam nostrum minima quas. Alias architecto natus optio rem, voluptatem incidunt voluptatibus dolore minima vero necessitatibus voluptatum! Dolorem neque ex minima, ullam ducimus placeat, nesciunt odit quod itaque temporibus quas maiores.' 
      />
      <Section align='right' 
               img={require('../../Assets/Images/home-feed-img.png')} 
               link="/feed" 
               color="#0F9D58" 
               title="Feed" 
               content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta totam nostrum minima quas. Alias architecto natus optio rem, voluptatem incidunt voluptatibus dolore minima vero necessitatibus voluptatum! Dolorem neque ex minima, ullam ducimus placeat, nesciunt odit quod itaque temporibus quas maiores.' 
      />
      <Footer />
    </>
  );
}