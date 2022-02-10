import { Routes, Route } from 'react-router-dom';

import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AboutMe from './pages/AboutMe';
import Contacts from './pages/Contacts';
import Main from './pages/Main';
import Projects from './pages/Projects';

const App = () => (
  <div className="container">
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="main" element={<Main />} />
      <Route path="about" element={<AboutMe />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contacts" element={<Contacts />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
