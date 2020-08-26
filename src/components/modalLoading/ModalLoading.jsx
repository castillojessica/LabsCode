import React, { useEffect } from 'react'
import { withRouter } from "react-router-dom";
import M from 'materialize-css';
import Detail from "../detail/Datail";


function ModalLoading({history}) {
    useEffect(() => {
        M.AutoInit();
    }, [])
    const returnHome = () => {
        history.push("/Detail");
    };
    return (
        <div className='center-align'>
            <div className='service-button'><a class="waves-effect waves-light btn modal-trigger light-blue darken-1" href="#modal1">PEDIR SERVICIO</a></div>
            <div id="modal1" class="modal">
                <div class="modal-content">
                    <h5>Estamos localizando al asistente más cercano.</h5>

                </div>
                <div className='center-align'>
                <div class="preloader-wrapper small active">
                    <div class="spinner-layer spinner-green-only">
                        <div class="circle-clipper left">
                            <div class="circle"></div>
                        </div><div class="gap-patch">
                            <div class="circle"></div>
                        </div><div class="circle-clipper right">
                            <div class="circle"></div>
                        </div>
                    </div>
                </div>
                </div>

                <div class="modal-footer">
                    <a onClick={returnHome} class="modal-close waves-effect waves-green btn-flat">Aceptar</a>
                </div>

            </div>
        </div>
    )
}

export default withRouter(ModalLoading)
