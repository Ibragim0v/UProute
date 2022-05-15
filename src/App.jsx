import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Users, Posts, UserSingle } from "./pages";
import { useContext } from "react";
import { ModeContext } from "./context/mode-context";
import "./App.scss";
import { Private } from "./Private";
import { Public } from "./Public";
import { AuthContext } from "./context/AuthContext";

export function App() {

    const { token } = useContext(AuthContext);

    const { mode } = useContext(ModeContext);

    if (token?.token) {
        return <Private />
    }

    return <Public />
}