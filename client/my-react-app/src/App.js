import AddProject from './Pages/AddProject';
import Menu from './Pages/Menu';
import Login from './Pages/Login'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import TeamLists from './Pages/TeamLists';
import User from './Components/User';
import UserMenu from './Pages/UserMenu';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Project/:id" element={<Menu />} />
          <Route path="/Add" element={<AddProject />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/Team-List" element={<TeamLists/>} />
          <Route path="/UserMenu" element={<UserMenu/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
