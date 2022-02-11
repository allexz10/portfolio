import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AboutMe from './pages/AboutMe/AboutMe';
import Contacts from './pages/Contacts/Contacts';
import NotFound from './pages/NotFound/NotFound';
import Projects from './pages/Projects/Projects';
import './App.scss';

const App = () => (
  <div className="container">
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="main" element={<Main />} />
      <Route path="about" element={<AboutMe />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
