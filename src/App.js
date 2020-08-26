import React, {useEffect, useState} from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import useAuth from './hooks/useAuth';
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
import 'materialize-css/dist/css/materialize.min.css';
import { auth, db } from "./components/Firebase/firebase";
import Home from './components/home/Home';
import Welcome from './components/welcome/welcome';
import Cart from './components/cart/Cart';
import DetailServices from './components/detailServices/DetailServices';
import ModalConf from './components/modalConfirm/ModalConfirm';
import Detail from './components/detail/Datail';
// import ShowDetail from './components/detail/showDetails';
// import ModalLoading from './components/modalLoading/ModalLoading';

function App() {
  const [firebaseUser, setFirebaseUser] = useState(false);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setFirebaseUser(user);
        console.log(firebaseUser)
        // console.log(firebaseUser);
      } else {
        setFirebaseUser(null);
      }
    });
    // const getData = async () => {
    //   try {
    //     const current = auth.currentUser;
    //     if (!current) return;
    //     const uid = current.uid;
    //     console.log("yo merengues", uid);
    //     const data = await db.collection("user").doc(uid).get();
    //     console.log(data);
    //     const arrayData = { user: data.user, ...data.data() };
    //     setUserName(arrayData);
    //     console.log(arrayData);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // getData();
  }, []);
  return firebaseUser !== false ? (
    <Router>
    <Switch>
      <Route path="/" exact>
        <Welcome />
      </Route>
      <Route path="/Signin" exact>
        <Signin />
      </Route>
      <Route path="/Signup" >
        <Signup />
      </Route>
      <Route path="/Cart" >
        <Cart />
      </Route>
      <Route path="/DetailServices" >
        <DetailServices />
      </Route>      
      <Route path="/ModalConf" >
        <ModalConf />
      </Route>
      <Route path="/Detail" >
        <Detail />
      </Route>
      {/* <Route path="/ShowDetail" >
        <ShowDetail />
      </Route> */}
      {/* <Route path="/ModalLoading" >
        <ModalLoading />
      </Route> */}
      <Route path="/Home" >
        <Home 
          // userName={userName} 
          // setUserName={setUserName} 
          firebaseUser={firebaseUser} 
          setFirebaseUser={setFirebaseUser} />
      </Route>
      
      
    </Switch>
  </Router>
   ) : (
    <p>Cargando...</p>
  );
}

export default App;
