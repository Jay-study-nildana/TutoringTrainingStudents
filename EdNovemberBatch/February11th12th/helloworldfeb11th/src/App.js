import logo from './logo.svg';
import './App.css';
import Ameesha from './components/Ameesha';
import JayPhotography from './components/JayPhotography';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import JayPhotography2 from './components/JayPhotography2';


function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Ameesha />} />
          <Route path="/jayphotography" element={<JayPhotography />} />
          <Route path="/jayphotography2" element={<JayPhotography2 />} />
        </Route>
      </Routes>

      {/* <Ameesha />
      <JayPhotography /> */}
    </div>
  );
}

export default App;
