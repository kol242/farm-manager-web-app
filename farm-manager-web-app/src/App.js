import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute'
import Animals from './Pages/Dashboards/Animals'
import Fields from './Pages/Dashboards/Fields'
import Crops from './Pages/Dashboards/Crops'
import Vehicles from './Pages/Dashboards/Vehicles'
import Homepage from './Pages/Homepage'
import LandingPage from './Pages/LandingPage'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './Common/Style/app.scss'

function App() {
  return (
    <div className="app-layout">
      <Router>
        <Navbar className="navbar"/>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/login" element={<Login className="body-content" />} />
          <Route path="/signup" element={<Signup className="body-content" />} />
          <Route exact path="/home" element={<PrivateRoute/>}>
            <Route exact path= "/home" element={<Homepage className="body-content"/>}/>  
          </Route>
          <Route exact path="/crops" element={<PrivateRoute/>}>
            <Route exact path= "/crops" element={<Crops className="body-content"/>}/>  
          </Route>
          <Route exact path="/animals" element={<PrivateRoute/>}>
            <Route exact path= "/animals" element={<Animals className="body-content"/>}/>  
          </Route>
          <Route exact path="/vehicles" element={<PrivateRoute/>}>
            <Route exact path= "/vehicles" element={<Vehicles className="body-content"/>}/>  
          </Route>
          <Route exact path="/fields" element={<PrivateRoute/>}>
            <Route exact path= "/fields" element={<Fields className="body-content"/>}/>  
          </Route>
        </Routes>
        <Footer className="footer" />
      </Router>
    </div>
  );
}

export default App;
