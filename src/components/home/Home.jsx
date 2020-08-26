import React from 'react'
import { withRouter } from "react-router-dom";
import WithAuthRoute from '../../hooks/WithAuthRoute';
import { auth, db, firebase } from "../../components/Firebase/firebase";
import ModalLoading from '../modalLoading/ModalLoading';
import logoLaaps from "../../assets/images/logo-laaps.svg";
import Sidebar from '../SideBar'
import "../../assets/styles/Home.css";
import Map from './Map'

function Home({history}) {
    const logOut = () => {
        auth.signOut().then(() => {
          history.push("/");
        });
      };
    return (
        <div >
   
             <WithAuthRoute />
             
             <Sidebar /> 
             <Map />
             <div className='logout-pos'>
             <div id="logout" className="material-icons" onClick={() => logOut()}>
             <i className="material-icons transparent">notifications</i>
             </div>
             </div>
             <ModalLoading />
        </div>
    )
}


export default withRouter(Home)
