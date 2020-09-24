import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      menu: false,
    }
  }

  toggleMenu = () => {
    this.setState({ menu: !this.state.menu })
  }

  render(){
    return (
     <div className='app'>
        <header className='nav-bar'>
         <h1 className='nav-bar-title'> Start Bootstrap </h1>
         <div className='nav-bar-menu'>
            <a href='#'> About </a>
            <a href='#'> Projects </a>
            <a href='#'> Content </a>
          </div>
         <div className='nav-bar-icon' onClick={this.toggleMenu}> Menu &#9776; </div>
       </header>
       <div className={this.state.menu ? 'menu slide' : 'do-not-display'}>
          <a href='#'> About </a>
          <a href='#'> Projects </a>
          <a href='#'> Content </a>
        </div>
        <div className='main'>
         <h1 className='big-title'> GREYSCALE </h1>
         <h2 className='smol-title'> A free, responsive, one page Bootstrap theme created by Start Bootstrap </h2>
         <div className='start-button'> GET STARTED </div>
       </div>
     </div>
    );
  }
}

export default App;
