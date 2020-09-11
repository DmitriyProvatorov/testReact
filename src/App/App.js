import React, { Component } from 'react';

import './ElemsStyle.css';
import './Medias.css';
import Main from '../Main'
import HeaderContainerSite  from "../PageContainers/HeaderContainer"

class App extends Component {
  render() {
    return (
        <div className="container">
          <Main />
          <HeaderContainerSite/>
        </div>
    );
  }
}

  export default App;
