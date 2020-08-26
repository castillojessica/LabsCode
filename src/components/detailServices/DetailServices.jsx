import React, { useEffect } from 'react'
import { withRouter } from "react-router-dom";
// import DetailServi from "../../assets/styles/DetailServices";
import M from 'materialize-css';

function DetailServices() {
    useEffect(() => {
        M.AutoInit();
    }, [])
    return (
        <div className='center-align'>

            <a class='dropdown-trigger btn ' href='#' data-target='dropdown1'>Detalles del Servicio</a>
            <ul id='dropdown1' class='dropdown-content'>
                <li className="grey lighten-3 center-align"><h6>Detalles del Servicio</h6></li>
                <li><a href="#!">Lavado y Encerado</a></li>
                <li class="divider" tabindex="-1"></li>
                <li><a href="#!">Tiempo de Llegada: 30 min</a></li>
                <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
                <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
            </ul>

            <a class="btn tooltipped hover" data-position="top" data-tooltip="I am a tooltip">Hover me!</a>
        </div>
    )
}

export default withRouter(DetailServices)
