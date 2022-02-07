import PokeHome from './components/PokeHome';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
    return (
        <Router>
            <div id='container'>
                <Routes>
                    <Route path="/" element={<PokeHome />}>
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;