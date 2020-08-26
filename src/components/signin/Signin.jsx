import React, { useState, useCallback, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { auth, db, firebase } from "../Firebase/firebase";
import WithAuthRoute from '../../hooks/WithAuthRoute';
import logoLaaps from "../../assets/images/mainLaaps.svg";
import "../../assets/styles/Signing.css";



function Signin({ history }) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        if (firebase.auth().currentUser) {
            history.push('/Home')
        }
    }, [firebase.auth().currentUser])

    const signIn = useCallback(() => {
        auth
            .signInWithEmailAndPassword(email, pass)
            .then(() => {
                setEmail("");
                setPass("");
                setError(null);
                history.push("/Home");
            })
            .catch((error) => {
                switch (error.code) {
                    case "auth/invalid-email":
                        setError("El formato del email es incorrecto");
                        break;
                    case "auth/weak-password":
                        setError("La contraseña debe ser de mínimo 6 caracteres");
                        break;
                    case "auth/email-already-in-use":
                        setError("Este email ya esta en uso");
                        break;
                    case "auth/wrong-password":
                        setError(
                            "La contraseña es incorrecta o el usuario no tiene password"
                        );
                        break;
                    case "auth/user-not-found":
                        setError("Usuario no encontrado");
                        break;
                    default:
                        return;
                }
            });
    }, [email, pass, history]);
    // const profile = () => {
    //   history.push("/Profile");
    // }
    const signUp = () => {
        history.push("/Signup");
    };


    return (
        <div className="center-align background">
            {/* <WithAuthRoute /> */}
            
            <img className="logo" src={logoLaaps} alt="logo" />
            <div className="col s12">
                <div className="container"><div id="login-page" className="">
                    <div className="">
                        <form className="login-form">
                            <div className="row">
                                <div className="input-field col s12">
                                    <h5 className="ml-4 center-align fontbold">CLIENTE</h5>
                                </div>
                            </div>
                            <div class="row margin">
                                <div class="input-field col s12 grey lighten-3">
                                    {/* <i class="material-icons prefix pt-2">person_outline</i> */}
                                    <input
                                        id="username"
                                        type="text"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                    />
                                    <label for="username" class="center-align">E-mail</label>
                                </div>
                            </div>
                            <div class="row margin  ">
                                <div class="input-field col s12 grey lighten-3">
                                    {/* <i class="material-icons prefix pt-2">lock_outline</i> */}
                                    <input
                                        id="password"
                                        type="password"
                                        onChange={(e) => setPass(e.target.value)}
                                        value={pass}
                                    />
                                    <label for="password">Contraseña</label>
                                </div>
                            </div>
                            {error && <div className="alert alert-danger error">{error}</div>}
                            <div className="">
                                <div className="input-field col s6">
                                    <a className="btn waves-effect waves-light border-round light-blue darken-1  col s12 "
                                        id="logIn"
                                        //  data-testid="btn-login"
                                        onClick={signIn}>INICIAR SESIÓN
                                    </a>
                                </div>

                                <div className="">
                                    <p className=""><a href="user-forgot-password.html" className="fontcolor">Olvidaste tu contraseña ?</a></p>
                                </div>
                            </div>
                        </form>
                     
                        <div className="">
                            <div className="">
                                <p className=" "><a onClick={signUp} ><h6 className="fontcolor" >Registrate</h6></a></p><h6>¿No tienes una cuenta?</h6>
                                </div>

                        </div>

                    </div>
                </div>
                </div>
                <div className="content-overlay"></div>
            </div>
        </div>

    )
}

export default withRouter(Signin)
