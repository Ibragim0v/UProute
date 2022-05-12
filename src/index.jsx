import React from "react";
import {createRoot} from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { ModeProvider } from "./context/mode-context";
import { LangProvider } from "./context/lang-context";
import "bootstrap/dist/js/bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/styles/normolize.scss"
import { App } from "./App";

const root = createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <LangProvider>
            <ModeProvider>
                <App></App>
            </ModeProvider>
        </LangProvider>
    </BrowserRouter>
);