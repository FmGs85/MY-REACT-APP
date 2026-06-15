import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Categories from "./components/Categories";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header active="home" />
      <Hero />
      <Stats />
      <Categories />
      <Courses />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
