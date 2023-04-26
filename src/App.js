import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from 'react-router-dom';
  
import Home from './Home';
import About from './About';
import Customised from './CustomisedPaintings';
  
function App() {
  return (
    
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/customised' element={<Customised/>} />
        </Routes>
      </Router>
    
  );
}
  
export default App;