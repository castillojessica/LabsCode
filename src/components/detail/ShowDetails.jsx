import React, { useEffect } from 'react'
import { withRouter } from "react-router-dom";
import '../../assets/styles/ShowDetails.css';
import M from 'materialize-css';
import Cart from "../cart/Cart";


function ShowDetails({ history }) {
    useEffect(() => {
        M.AutoInit();
    }, [])
    const returnHome = () => {
        history.push("/Detail");
    };
    return (
        <div className='center-align'>
            <div className='service-button'><a class="waves-effect waves-light btn modal-trigger light-blue darken-1" href="#modal2">DETALLES DEL SERVICIO</a></div>
            <div id="modal2" class="modal">
                <div class="modal-content">

                    <Cart />
                </div>


                <div class="modal-footer">
                    <a onClick={returnHome} class="modal-close waves-effect waves-green btn-flat">Aceptar</a>
                </div>

            </div>
        </div>
    )
}

export default withRouter(ShowDetails)
