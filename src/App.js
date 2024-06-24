import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import Hero from './heroSection/Hero';
import Courses from './courses/Courses';
import Internship from './internship/Internship';
import Blog from './blogs/Blog';
import Footer from './footer/Footer';
import Portal from './portal/Portal';
import LMS from './lms/LMS';
import BackToTop from './backtotop/BackToTop';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Courses />
      <LMS />
      <Internship />
      <Portal />
      <Blog />
      <Footer />
      <BackToTop/>
    </div>
  );
}

export default App;
