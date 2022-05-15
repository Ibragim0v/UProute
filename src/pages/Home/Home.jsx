import { Link } from "react-router-dom"
import './Home.scss'

export const Home = () => {
    return (
        <div className="home">

            <div className="text-center">

                <h1 className="home-heading">Welcome</h1>

                <p className="h3 home-text">If you want to use this website,You must to click it</p>

                <Link to='/login' className="btn btn-primary">Sign In</Link>
            </div>

        </div>
    )
}