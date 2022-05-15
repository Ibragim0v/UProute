import "./App.scss";
import { Public } from "./Public";
import { Private } from "./Private";
import { useAuth } from "./hooks/useAuth";

export function App() {

    const { token } = useAuth();

    if (token?.token) {
        return <Private />
    }

    return <Public />
}