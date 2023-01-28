import './App.css';
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';


function App() {
  return (
    <h1 className="app">
    <Navbar />

    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
    </h1>
  );
}

export default App;
