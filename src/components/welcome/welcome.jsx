import React from 'react'
import { withRouter } from "react-router-dom";
import logoLaaps from "../../assets/images/mainLaaps.svg";
import logoCompany from "../../assets/images/logo-company.svg";
import logoClient from "../../assets/images/logo-client.svg";
import "../../assets/styles/Welcome.css";


function welcome({ history }) {
    const signin = () => {
        history.push("/Signin");
    };
    const modal = () => {
        history.push("/Cart");
    };

    return (
        <div className="main">
        <div >
            <img className="logoLap" src={logoLaaps} alt="logo" />
            <div className="letters-welcome"><center><h4>¡BIENVENIDO!</h4></center></div>
            <div><center><h5>Elige una sección...</h5></center></div>
            <div class="row images-client-company">
                <div class="input-field col m6 s6 ">
                    <img className="" src={logoCompany} alt="logo" onClick={modal} />
                </div>
                <div class="input-field col m6 s6">
                    <img className="" src={logoClient} alt="logo" onClick={signin} />
                </div>
            </div>
        </div>
        </div>
    )
}

export default withRouter(welcome)
