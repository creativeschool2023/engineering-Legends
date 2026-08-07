import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Archive from './components/Archive';
import Voices from './components/Voices';
import Disciplines from './components/Disciplines';
import MarvelsHub from './components/MarvelsHub';
import MarvelsChina from './components/MarvelsChina';
import MarvelsTaiwan from './components/MarvelsTaiwan';
import MarvelsSouthKorea from './components/MarvelsSouthKorea';
import MarvelsSaudiArabia from './components/MarvelsSaudiArabia';
import MarvelsUSA from './components/MarvelsUSA';
import MarvelsJapan from './components/MarvelsJapan';
import MarvelsRussia from './components/MarvelsRussia';
import MarvelsFrance from './components/MarvelsFrance';
import MarvelsGermany from './components/MarvelsGermany';
import MarvelsIndia from './components/MarvelsIndia';
import MarvelsSwitzerland from './components/MarvelsSwitzerland';
import CodeOfConduct from './components/CodeOfConduct';
import Organizations from './components/Organizations';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/disciplines" element={<Disciplines />} />
          <Route path="/voices" element={<Voices defaultTab="discourse" />} />
          <Route path="/marvels" element={<MarvelsHub />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/organizations" element={<Organizations />} />
          <Route path="/marvels/china" element={<MarvelsChina />} />
          <Route path="/marvels/taiwan" element={<MarvelsTaiwan />} />
          <Route path="/marvels/south-korea" element={<MarvelsSouthKorea />} />
          <Route path="/marvels/saudi-arabia" element={<MarvelsSaudiArabia />} />
          <Route path="/marvels/usa" element={<MarvelsUSA />} />
          <Route path="/marvels/japan" element={<MarvelsJapan />} />
          <Route path="/marvels/russia" element={<MarvelsRussia />} />
          <Route path="/marvels/france" element={<MarvelsFrance />} />
          <Route path="/marvels/germany" element={<MarvelsGermany />} />
          <Route path="/marvels/india" element={<MarvelsIndia />} />
          <Route path="/marvels/switzerland" element={<MarvelsSwitzerland />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}
