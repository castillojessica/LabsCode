import React from 'react';
import { withRouter } from "react-router-dom";
import "../../assets/styles/Cart.css";

function Cart() {
    return (
        <div>
            <center><h3>Detalles del servicio</h3></center>
            <div className="main-background"></div>
            <div className="serv"></div>
            <div className="perf"></div>
            <div className="pago"></div>
            <div className="conf"></div>

     </div>
        
    )
}
export default withRouter(Cart)


