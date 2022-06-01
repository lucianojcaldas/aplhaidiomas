import {  BrowserRouter,  Switch,  Route,} from "react-router-dom";

import Service from './Pages/Service';
import Home from './Pages/Home';
import Contato from './Pages/Contato';
import Header from './Components/Header';
import Footer from './Components/Footer';

import './styles.css'

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
          <Switch>
            <Route path="/" exact ={true} component={Home} />
            <Route path="Service" component={Service} />
            <Route path="Contato" component={Contato} />
          </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Routes;