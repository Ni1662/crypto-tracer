import { makeStyles } from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header'
import Coinpage from './Pages/Coinpage';
import Contactpage from './Pages/Contactpage';
import Homepage from './Pages/Homepage';
import Mainpage from './Pages/Mainpage';

const userStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = userStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path='/' component={Mainpage} exact />
        <Route path='/crypto' component={Homepage} exact />
        <Route path='/contact' component={Contactpage} exact />
        <Route path='/crypto/coins/:id' component={Coinpage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
