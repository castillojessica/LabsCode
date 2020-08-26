import React, {useEffect, Fragment} from 'react'
import M from  'materialize-css/dist/js/materialize.min.js'
import { auth, db, firebase } from "../../components/Firebase/firebase";
import { withRouter } from "react-router-dom";

  class Sidebar extends React.Component {  
    constructor(){
      super();
      this.state = {
        style:"menu-open",
        menuStatus:"open"
      };
      this.handleClick = this.handleClick.bind(this);
    };
  
    handleClick() {
      switch(this.state.menuStatus)
      {
        case "open":
          this.setState({
            menuStatus:"close",
            style:"menu-open active"
          });
          break;
        case "close":
          this.setState({
            menuStatus:"open",
            style:"menu-open"
          });
          break;
      }        
    }
  
    render() {
      return (      
        <div className='sidebar-button'>
          <div onClick={this.handleClick} className='menu btn-floating'><i className=" material-icons white">menu</i></div>
          <div className={this.state.style}>               
            <ul>
              
                <li>
                  <a href='#'>Mi perfil</a>
                </li>
                <li>
                  <a href='#'>Historial</a>
                </li>
                <li>
                  <a href='#'>¿Cómo funciona LAAPS?</a>
                </li>
                <li>
                  <a href="#">Comentarios y Sugerencias</a>
                </li>
        
            </ul>
          </div>
        </div>
      );
    }
  }

export default Sidebar

