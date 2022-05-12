import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Fragment } from "react"
import { Loading } from "../../components"
import './Users.scss'

export function Users() {

    const [users, setUsers] = useState({
        isLoading: true,
        isError: false,
        data: []
    })
    
    useEffect(() => {
        fetch(process.env.REACT_APP_URL + "/users")
        .then(res => res.json())
        .then(data => {
            setUsers({
            ...users,
            isLoading: false,
            data: data
            })
        })

        .catch(err => {
            setUsers({
                ...users,
                isError: true
            })
        })
    }, [])
    
    return (
        <div className="users">
            <div className="container-fluid">
            
                <h1 className="user-text">Users</h1>

                {users.isLoading && !users.isError && <Loading />}
                {users.isError && <p className="h1">Error...</p>}
                {users.data.length > 0 && <ul>
                    
                {users.data.map(user => (
                    <li className="users-item" key={user.id}>
                        <Link to={`/users/${user.id}`}>
                            <p>{user.id}. <span>{user.name}</span></p>
                        </Link>
                    </li>
                ))}

                </ul>}
            
            </div>
        </div >
    )
}