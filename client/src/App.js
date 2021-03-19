import './App.css';
import PersonState from './context/person/PersonState';
import AlertState from './context/alert/AlertState';
import Login from './components/auth/Login'

function App() {
  return (
    <div className="App">
      <PersonState>
        <AlertState>
          <div className="container">
            <Login></Login>
          </div>
        </AlertState>
      </PersonState>
    </div>
  );
}

export default App;
