import About from './about.jsx';
import Help from './help.jsx';
import Home from './home.jsx';
import Prodet from './productdet.jsx';
import Otp from './otp.jsx';
import Otp1 from './otp1.jsx';
import Customize from './customize.jsx';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/help" element={<Help />} />
      <Route path="/customize" element={<Customize />} />
      <Route path="/prodet/:id" element={<Prodet />} />
      <Route path="/otp/:id" element={<Otp />} />
      <Route path="/otp1" element={<Otp1 />} />
    </Routes>
  );
}
export default App;