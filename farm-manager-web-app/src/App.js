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
          <Route exact path="/crops" element={<PrivateRoute/>}>
            <Route exact path= "/crops" element={<Crops className="body"/>}/>  
          </Route>
          <Route exact path="/animals" element={<PrivateRoute/>}>
            <Route exact path= "/animals" element={<Animals className="body"/>}/>  
          </Route>
          <Route exact path="/vehicles" element={<PrivateRoute/>}>
            <Route exact path= "/vehicles" element={<Vehicles className="body"/>}/>  
          </Route>
          <Route exact path="/fields" element={<PrivateRoute/>}>
            <Route exact path= "/fields" element={<Fields className="body"/>}/>  
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
