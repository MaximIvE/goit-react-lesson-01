import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>goit-react-hw-01-components</h1>
        <ul className="nav-list">Навігація по сторінці
          <li className="nav-bar" id="1-01">
              <img src={logo} className="App-logo" alt="logo" />
              Профіль соціальної мережі
          </li>
          <li className="nav-bar" id="1-02">
              <img src={logo} className="App-logo" alt="logo" />
              Секція статистики
          </li>
          <li className="nav-bar" id="1-03">
              <img src={logo} className="App-logo" alt="logo" />
              Список друзів
          </li>
          <li className="nav-bar" id="1-04">
              <img src={logo} className="App-logo" alt="logo" />
              Історія транзакцій
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
