import React from 'react'
import { withRouter } from "react-router-dom";
import WithAuthRoute from '../../hooks/WithAuthRoute';
import { auth, db, firebase } from "../../components/Firebase/firebase";
import Sidebar from '../SideBar'
import "../../assets/styles/Home.css";
import Map from '../home/Map'
import ShowDetail from "./ShowDetails"
// import Show from '../detail/showDet';
import ModalLoading from '../modalLoading/ModalLoading';

function Datail({history}) {
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
             <button id="logout" className="material-icons " onClick={() => logOut()}></button>
             <ShowDetail />
        </div>
    )
 
}

export default withRouter(Datail)
