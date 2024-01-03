// import { makeStyles } from "@material-ui/core";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
// import "./App.css";
import Header from "./Components/Header";
import Coinpage from "./Pages/Coinpage";
import Contactpage from "./Pages/Contactpage";
import Homepage from "./Pages/Homepage";
import Mainpage from "./Pages/Mainpage";
import Alert from "./Components/Alert";
import Forex from "./Pages/Forex";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import { CryptoState } from "./CryptoContext";
// import { useHistory } from "react-router-dom";
import OnboardPage from "./Pages/OnboardPage";
import { useMemo } from "react";
import Orb from "./Components/Orb";
import News from "./Pages/News";
import Stock from "./Pages/Stock";

// const userStyles = makeStyles(() => ({
//   App: {
//     backgroundColor: "#050816",
//     color: "white",
//     minHeight: "100vh",
//     overflow: "hidden",
//   },
// }));

function App() {
  // const classes = userStyles();
  const { user } = CryptoState();
  // const history = useHistory();

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <BrowserRouter>
      <div className={`bg-[#050816] text-white min-h-screen overflow-hidden `}>
        {orbMemo}
        <Header />
        <Route path="/" component={Mainpage} exact />
        <Route path="/about" component={About} exact />
        <Route path="/crypto" component={Homepage} exact />
        <Route path="/forex" component={Forex} exact />
        <Route path="/contact" component={Contactpage} exact />
        <Route path="/crypto/coins/:id" component={Coinpage} />
        <Route path="/onboard" component={OnboardPage} />
        {user ? (
          <>
            <Route path="/news" component={News} exact />
            <Route path="/profile" component={Profile} exact />
            <Route path="/stock" component={Stock} exact />
          </>
        ) : (
          <Redirect to="/" />
        )}
      </div>
      <Alert></Alert>
    </BrowserRouter>
  );
}

export default App;
