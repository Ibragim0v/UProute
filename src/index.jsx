import React from "react";
import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { ModeProvider } from "./context/mode-context";
import { LangProvider } from "./context/lang-context";
import { App } from "./App";
import "bootstrap/dist/js/bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/styles/normolize.scss"
import { AuthProvider } from "./context/AuthContext";

const root = createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <LangProvider>
            <ModeProvider>
                <AuthProvider>
                    <App />
                </AuthProvider>
            </ModeProvider>
        </LangProvider>
    </BrowserRouter>
);