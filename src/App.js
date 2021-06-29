import Register from "./auth/Register";
import Login from "./auth/Login";
import Task from "./auth/Task";
import Home from "./Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route,Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
     <BrowserRouter>
     <ToastContainer/>
     <Switch>
     <Route exact path="/" component={Home}/>
     <Route exact path="/register" component={Register}/>
     <Route exact path="/login" component={Login}/>
     <Route exact path="/task" component={Task}/>
     </Switch>
     
     

     </BrowserRouter>
     
    
  );
}

export default App;
