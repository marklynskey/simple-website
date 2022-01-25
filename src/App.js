import { Routes, Route, Link } from "react-router-dom";

const App = () => (
  <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </>
);

const Home = () => <h1>Home</h1>;

const About = () => <h1>About</h1>;

const Contact = () => <h1>Contact</h1>;

export default App;
