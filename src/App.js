import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import FirstCase from './Cases/FirstCase'


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<FirstCase/>} />
        </Routes>
    </Router>
  );
}

export default App;
