import React, { useState, useEffect, useCallback } from 'react'
import { withRouter } from "react-router-dom";
import { auth, db, firebase } from "../../components/Firebase/firebase";
import WithAuthRoute from '../../hooks/WithAuthRoute';
import logoLaaps from "../../assets/images/logo-lapps.svg";
import shortid from "shortid";
import M from 'materialize-css';
import "../../assets/styles/Signup.css";


function Signup({ history, props }) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState(null);
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [adress, setAdress] = useState("");
    const [gender, setGender] = useState("");
    const [dateBirth, setDateBirth] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        M.AutoInit();
    }, [])

    const signUp = useCallback(async() => {
        try{
     
         const res = await firebase.auth().createUserWithEmailAndPassword(email, pass)
            await db.collection('user').doc(res.user.uid).set({
              email: res.user.email,
              uid: res.user.uid
            })
            user()
            setEmail("");
            setPass("");
            setError(null);
            // const uid = app.auth().currentUser.uid;
            // const getUser = {
            //   email: email,
            //   userName: '',
            //   uid: uid,
            // }
            // db.collection("user").add(getUser);
            history.push("/EditProfile");
            console.log("Entraste");
          } catch (error) {
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
                setError("La contraseña es incorrecta o el usuario no tiene password");
                break;
              case "auth/user-not-found":
                setError("Usuario no encontrado");
                break;
              default:
                return;
          }
       }
      });
   
  const user = () => {
    const newUser = {
        id: shortid.generate(),
    //   item: product,
    //   check: payment,
    //   totQuantity: totalQuantity,
    //   table: table,
    //   userName: user.user,
    //   incomingHour: new Date().toLocaleString(),
    //   inicio: +new Date(),
    //   startAt: startAt,
    //   status: "En preparación",
    //   nameCus: customerName,
    //   openClose: "Abierta",
    };
    db.collection("order").add(newUser);
    db.collection("orderHistory").add(newUser);
  };

    const signinPage = () => {
        history.push("/Signin");
    };

    return (


        <div className="center-align">
            {/* <WithAuthRoute /> */}
            <img className="logo" src={logoLaaps} alt="logo" />

            <div className=" col s12">
                <div className="container"><div id="login-page" className="">
                    <div className="">
                        <form className="login-form">
                            <div className="">
                                <div className="input-field col s12">
                                    <h5 className="ml-4 center-align">REGISTRO</h5>

                                </div>
                            </div>
                            <div class="col s12 m12 l8 contact-form margin-top-contact">
                                <div class="row">
                                    <form class="col s12  ">
                                        <div class="">
                                            <div class="input-field col m6 s6 ">
                                                <input id="name" type="text" class="validate" />
                                                <label for="name" className="">Nombre(s)</label>
                                            </div>
                                            <div class="input-field col m6 s6">
                                                <input id="email" type="text" class="validate" />
                                                <label for="email">Apellido</label>
                                            </div>
                                        </div>

                                        <div class="input-field col m6 s12">
                                            <input id="company" type="text" class="validate" />
                                            <label for="company">Domicilio</label>
                                        </div>
                                        <div class="input-field col m6 s12">
                                            <input id="budget" type="text" class="validate" />
                                            <label for="budget">E-mail</label>
                                        </div>

                                        <div class="input-field col m6 s6">
                                            <select>
                                                <option value="" disabled selected>Selecciona Opción</option>
                                                <option value="1">Mujer</option>
                                                <option value="2">Hombre</option>
                                                <option value="3">No Binario</option>
                                            </select>
                                            <label>Genéro</label>
                                        </div>

                                        <div class="input-field col m6 s6 ">
                                            <input id="date" type="text" class="datepicker" />
                                            <label for="date">Fecha de Nacimiento</label>
                                        </div>

                                        <div class="input-field col m6 s6 ">
                                            <input id="phone" type="text" class="" />
                                            <label for="phone">Teléfono</label>
                                        </div>
                                        <div class="input-field col m6 s6">
                                            <input id="cp" type="text" class="validate" />
                                            <label for="cp">CP</label>
                                        </div>
                                        <div class="input-field col m6 s12">
                                            <input id="ine" type="text" class="validate" />
                                            <label for="ine">INE</label>
                                        </div>
                                        <div class="input-field col m6 s6">
                                            <select>
                                                <option value="" disabled selected>Selecciona Opción</option>
                                                <option value="1">Automóvil</option>
                                                <option value="2">Bicicleta</option>
                                                <option value="3">Motocicleta</option>
                                                <option value="3">A Pie</option>
                                            </select>
                                            <label>Medio de Transporte</label>
                                        </div>
                                        <div class="input-field col m6 s6">
                                            <input id="plate" type="text" class="validate" />
                                            <label for="plate">No. de Placa</label>
                                        </div>


                                        <div className="row">
                                            <div className="row">
                                                <a className="btn waves-effect waves-light border-round light-blue darken-1 "
                                                    id="next"
                                                    //  data-testid="btn-login"
                                                    onClick={signUp}
                                                >CONTINUAR</a>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <a className="btn waves-effect waves-light border-round light-blue darken-1  col s9 "
                                        id="logIn"
                                        //  data-testid="btn-login"
                                        onClick={signinPage}
                                    >Ya tienes cuenta?</a>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
                </div>
                <div className="content-overlay"></div>
            </div>
        </div>

    )
}

export default withRouter(Signup)
