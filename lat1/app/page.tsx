import Hero from "./components/hero";
import Skills from "./components/skill";
import PersonalInfo  from "./components/personalinfo";
import MyGallery from "./components/hobbies";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import "./krmn-style.css";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import contact from "./components/contact";
import ContactForm from "./components/contact";
import WarnaFavorit from "./components/tema";



 export default function MyApp() {
   return (
      <section>
    <Hero/>
    <Skills/>
    <PersonalInfo/>
    <MyGallery/>
    <RiwayatPendidikan/>
    <RiwayatPekerjaan/>
    <ContactForm/>
    <WarnaFavorit/>
   
  </section>
 );
 }



 