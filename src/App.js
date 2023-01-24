import logo from './logo.svg';
import './App.css';
import { Link,BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Employeroute from './employeroute';
import "bootstrap/dist/css/bootstrap.min.css"
import  "font-awesome/css/font-awesome.min.css"
import DeleteEmploye from './deleteemploye';
import LikedEmploye from './likedemploye';

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li><Link  class="btn btn-success m-1" to ="/Employee">Employee</Link></li>
          <li><Link class="btn btn-danger  m-1" to ="/DeleteEmploye">Delete Employe</Link></li>
          <li><Link class="btn btn-primary  m-1" to="/LikedEmploye">Liked Employe</Link></li>
        </ul>
        <Routes>
          <Route path ='/'element={<Employeroute/>}></Route>
          <Route path ='/Employee'element={<Employeroute/>}></Route>
          <Route path ='/' element={<DeleteEmploye/>}></Route>
          <Route path ='/DeleteEmploye' element={<DeleteEmploye/>}></Route>
          <Route path='/' element={<LikedEmploye/>}></Route>
          <Route path ='/LikedEmploye' element={<LikedEmploye/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
