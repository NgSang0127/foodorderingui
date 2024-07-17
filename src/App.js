import './App.css';
import {Navbar} from "./component/Navbar/Navbar";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {darkTheme} from "./Theme/DarkTheme";
import CustomerRouter from "./Routers/CustomerRouter";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "./State/Authentication/Action";
import {findCart} from "./State/Cart/Action";
import Routers from "./Routers/Routers";
import {getAllRestaurantsAction, getRestaurantById, getRestaurantByUserId} from "./State/Restaurant/Action";

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
    useEffect(() => {
        if (auth.user?.role === "ROLE_RESTAURANT_OWNER") {
            dispatch(getRestaurantByUserId(auth.jwt || jwt));
        }
    }, [auth.user]);
    

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Routers/>
        </ThemeProvider>
    )
}

export default App;
