import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Users, Posts, UserSingle } from "./pages";
import { useContext } from "react";
import { ModeContext } from "./context/mode-context";
import "./App.scss";

export function App() {

    const { mode } = useContext(ModeContext);

    return (
        <div className="App">
            <Header/>

            <div className={mode}>
                <Routes>
                    <Route path="/" element={<Users />} />
                    <Route path="/users/:userId" element={<UserSingle />} />
                    <Route path="/posts" element={<Posts />} />
                </Routes>
            </div>

            <Footer/>
        </div>
    )
}