import React, { useEffect } from 'react'
import { withRouter } from "react-router-dom";
import M from 'materialize-css';
// import '../../assets/styles/ModalConfirm.css'
// import Di from "../../assets/styles/";

function ModalConfirm() {
    useEffect(() => {
        M.AutoInit();
    }, [])
    return (
        <div className="modals">
            <a class="waves-effect waves-light btn modal-trigger light-blue darken-1" href="#modal1">CONFIRMAR</a>
            <div id="modal1" class="modal">
                <div class="modal-content center-align ">
                   <h5> <a class=''>SOLICITUD CONFIRMADA</a></h5>
                   <p>Te notificaremos 5 min antes de la llegada de tu asistente </p>

                </div>
              

                <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Aceptar</a>
                </div>
            </div>
        </div>
    )
}

export default withRouter(ModalConfirm)
