import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute'
import Homepage from './Pages/Homepage'
import LandingPage from './Pages/LandingPage'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/login" element={<Login className="body" />} />
          <Route path="/signup" element={<Signup className="body" />} />
          <Route exact path="/home" element={<PrivateRoute/>}>
            <Route exact path= "/home" element={<Homepage className="body"/>}/>  
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
