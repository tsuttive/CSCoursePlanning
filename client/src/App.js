import React, { Component } from 'react';
import './css/App.css';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components/Header.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Footer } from './components/Footer.js'
import AppLogin from './AppLogin';
import AppRegister from './AppRegister';
import AppMain from './AppMain';
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Header />
          <Switch>
            <Route path="/login" exact component={AppLogin} />
            <Route path="/register" exact component={AppRegister}/>
            <Route path="/" component={AppMain}/>
          </Switch>
        <Footer />
      </MuiThemeProvider>
    );
  }
}

export default App;
