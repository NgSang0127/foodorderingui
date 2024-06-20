import './App.css';
import {Navbar} from "./component/Navbar/Navbar";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {darkTheme} from "./Theme/DarkTheme";
import CustomerRouter from "./Routers/CustomerRouter";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "./State/Authentication/Action";
import {findCart} from "./State/Cart/Action";

function App() {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem('jwt');
    const {auth} = useSelector(store => store);

    useEffect(() => {
        return () => {
            dispatch(getUser(auth.jwt || jwt));
            dispatch(findCart(jwt));
        };
    }, [auth.jwt]);

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <CustomerRouter/>
        </ThemeProvider>
    )
}

export default App;
