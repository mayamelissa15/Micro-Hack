import AddProject from './Pages/AddProject';
import Menu from './Pages/Menu';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" component={Menu} />
          <Route path="/Add" component={AddProject} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
