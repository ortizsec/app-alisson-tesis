import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash from './routes/vista-splash/VistaSplash';
import Login from './routes/vista-login/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
