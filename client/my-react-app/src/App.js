import AddProject from './Pages/AddProject';
import Menu from './Pages/Menu';
import Login from './Pages/Login'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/Add" element={<AddProject />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
