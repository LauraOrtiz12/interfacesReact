import React, { Fragment } from 'react';
import Header from './componentes/Header';
import MainSection from './componentes/MainSection';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Cuentas from './componentes/Cuentas';
import Calendario from './componentes/Calendario';

function App() {
  return (
    <Router>
      <Fragment>
      <div>
        <Header />
        <main className='contenedor'>
          <Switch>
          <MainSection />
            <Route path="/" exact component={Inicio} />
            <Route path="/cuentas" component={Cuentas} />
            <Route path="/calendario" component={Calendario} />
          </Switch>
        </main>
      </div>
      </Fragment>
    </Router>
  );
}

export default App;
