import React from "react";
import logo from '../logo.svg';

function headerSection(){
    return (<header className="App-header">
    <h1>goit-react-hw-01-components</h1>
    <ul className="nav-list">Навігація по сторінці
      <li className="nav-bar" id="1-01" onClick={() => {userProfil('Профіль соціальної мережі')}}>
          <img src={logo} className="App-logo" alt="logo" />
          Профіль соціальної мережі
      </li>
      <li className="nav-bar" id="1-02" onClick={event => alert(event)}>
          <img src={logo} className="App-logo" alt="logo" />
          Секція статистики
      </li>
      <li className="nav-bar" id="1-03" onClick={event => alert(event)}>
          <img src={logo} className="App-logo" alt="logo" />
          Список друзів
      </li>
      <li className="nav-bar" id="1-04" onClick={event => alert(event)}>
          <img src={logo} className="App-logo" alt="logo" />
          Історія транзакцій
      </li>
    </ul>
  </header>)
};

export default headerSection;

function hero(){
    
}

function userProfil(name){
    return (
        <button>{name}</button>
    )
}


var audio = new Audio("soundfile.wav");

document.onclick = function() {
  audio.play();
}
